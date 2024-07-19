import { useCallback, useEffect, useState } from "react";
import {
  ReactFlow,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
} from "@xyflow/react";
import dagre from "dagre";
import Node from "./Node.js";
import "@xyflow/react/dist/style.css";
import "./index.scss";
import { editGoal } from "../../../../../services/index.js";

const nodeWidth = 320;
const nodeHeight = 130;
const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));
const getLayoutedElements = (nodes, edges, direction = "TB") => {
  const isHorizontal = direction === "LR";
  dagreGraph.setGraph({ rankdir: direction });

  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
  });

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);
  const newNodes = nodes.map((node) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    const newNode = {
      ...node,
      targetPosition: isHorizontal ? "left" : "top",
      sourcePosition: isHorizontal ? "right" : "bottom",
      position: {
        x: nodeWithPosition.x - nodeWidth / 2,
        y: nodeWithPosition.y - nodeHeight / 2,
      },
    };

    return newNode;
  });

  return { nodes: newNodes, edges };
};

const rfStyle = {
  backgroundColor: "#f8f8f8",
};

const nodeTypes = { textUpdater: Node };

const edgs = {};

function Index({ goals }) {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  useEffect(() => {
    const nodes = goals?.map((goal) => ({
      id: goal.id,
      type: "textUpdater",
      position: { x: 0, y: 0 },
      data: { ...goal },
    }));
    const edges = goals
      ?.filter((goal) => goal.parent)
      ?.map((item) => ({
        id: Math.random().toString(),
        source: item.parent,
        target: item.id,
      }));
    const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
      nodes,
      edges
    );
    setNodes(layoutedNodes);
    setEdges(layoutedEdges);
  }, [goals.length]);

  const handleRemoveAction = (changes) => {
    const removeEdge = edges.find((item) => item.id === changes?.[0]?.id);
    const itemId = removeEdge?.target;
    const item = goals.find((item) => item.id === itemId);
    editGoal(itemId, { ...item, parent: undefined });
  };

  const handleAddAction = (changes) => {
    const { source, target } = changes;
    const item = goals.find((item) => item.id === target);
    editGoal(target, { ...item, parent: source });
  };

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = (changes) => {
    if (changes?.[0]?.type === "remove") {
      handleRemoveAction(changes);
    }

    return setEdges((eds) => applyEdgeChanges(changes, eds));
  };
  const onConnect = (connection) => {
    handleAddAction(connection);
    return setEdges((eds) => addEdge(connection, eds));
  };

  return (
    <ReactFlow
      nodes={nodes}
      fitView
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      nodeTypes={nodeTypes}
      style={rfStyle}
    />
  );
}

export default Index;
