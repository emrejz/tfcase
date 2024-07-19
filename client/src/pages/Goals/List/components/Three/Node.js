import { Handle, Position } from "@xyflow/react";
import { Box } from "../../../../../components";
import { Detail } from "../../../../../svgs";
import dayjs from "dayjs";

const handleStyle = { margin: "auto" };

function TextUpdaterNode({ data, isConnectable }) {
  return (
    <div className="text-updater-node">
      <Box className="node-card">
        <div className="box-cnt">
          <div className="left">
            <img alt="goal" src="/assets/images/goal-title.png" />
            <div>GOAL</div>
          </div>
          <div className="right">
            <div>{data?.progress} %</div>
            <Detail />
          </div>
        </div>
        <div className="title">{data?.title}</div>
        <div className="footer-side">
          <div>
            Ends on
            {data?.endDate ? dayjs(data?.endDate).format("MMM D, YYYY") : "-"}
          </div>
          <img alt="owner img" src={data?.ownerImg} />
        </div>
      </Box>
      <Handle
        type="source"
        position={Position.Bottom}
        style={handleStyle}
        isConnectable={isConnectable}
      />
      <Handle
        type="target"
        position={Position.Top}
        style={handleStyle}
        isConnectable={isConnectable}
      />
    </div>
  );
}

export default TextUpdaterNode;
