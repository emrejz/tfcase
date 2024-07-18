import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { DatePicker, Form, Input, Select } from "antd";
import dayjs from "dayjs";
import { Box, Button } from "../../../components";
import { getGoal, editGoal, getUsers, getGoals } from "../../../services";
import { routePaths } from "../../../constants/routes";
import { progressOptions } from "../utils";
import "./index.scss";

export default function Index() {
  const { id } = useParams();
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [users, setUsers] = useState();
  const [goals, setGoals] = useState();
  const [goal, setGoal] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [userData, goalsData, goalData] = await Promise.all([
          getUsers(),
          getGoals(),
          getGoal(id),
        ]);
        form.setFieldsValue({
          ...goalData,
          startDate: dayjs(goalData.startDate),
          endDate: dayjs(goalData.endDate),
        });
        setGoal(goalData);
        setGoals(goalsData);
        setUsers(userData);
      } catch (error) {
        alert(error.message);
      }
    };
    if (id) {
      fetchData();
    }
  }, [id]);

  const onOwnerChange = (value) => {
    form.setFieldsValue({ owner: value });
  };
  const onProgressChange = (value) => {
    form.setFieldsValue({ progress: value });
  };
  const onParentChange = (value) => {
    form.setFieldsValue({ parent: value });
  };

  const onFinish = async (values) => {
    try {
      setLoading(true);
      await editGoal(goal?.id, values);
      navigate(routePaths.goals);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="new-goal-container">
      <img
        className="goal-top-bg"
        alt="not-found"
        src="/assets/images/new-goal-top-bg.png"
      />
      <Form
        form={form}
        name="goal"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Box className="box1">
          <div className="head">
            <img alt="goal title" src="/assets/images/goal-title.png" />
            <span>Organizational goal title</span>
          </div>

          <Form.Item
            className="goal-title-input"
            name="title"
            rules={[
              {
                required: true,
                message: "Please input a goal title!",
              },
            ]}
          >
            <Input disabled={loading} placeholder="Add goal title" />
          </Form.Item>
          <Form.Item className="goal-desc-input" name="desc">
            <Input disabled={loading} placeholder="Add a description" />
          </Form.Item>
        </Box>
        <Box className="box2">
          <div className="goal-owner-label">Goal owner</div>
          <Form.Item className="goal-owner-select" name="owner">
            <Select
              disabled={loading}
              loading={!users}
              onChange={onOwnerChange}
              options={users?.map((item) => ({
                ...item,
                value: item.id,
                label: (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <img
                      style={{ width: "24px", height: "24px" }}
                      alt={item.displayName}
                      src={item.img}
                    />
                    <span>{item.displayName}</span>
                  </div>
                ),
              }))}
              optionRender={({ data }) => {
                return (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <img
                      style={{ width: "24px", height: "24px" }}
                      alt={data.displayName}
                      src={data.img}
                    />
                    <span>{data.displayName}</span>
                  </div>
                );
              }}
            />
          </Form.Item>
          <div className="goal-time-label">Timeline</div>
          <div className="timeline">
            <Form.Item name="startDate">
              <DatePicker disabled={loading} placeholder="Start date" />
            </Form.Item>
            <Form.Item name="endDate">
              <DatePicker disabled={loading} placeholder="End date" />
            </Form.Item>
          </div>
          <div className="goal-time-label">Parent goal</div>
          <Form.Item className="goal-owner-select" name="parent">
            <Select
              disabled={loading}
              onChange={onParentChange}
              loading={!goals}
              options={goals
                ?.filter((item) => item.id !== id)
                ?.map((item) => ({
                  value: item.id,
                  label: item.title,
                }))}
            />
          </Form.Item>
          <div className="goal-time-label">Progress</div>
          <Form.Item className="goal-owner-select" name="progress">
            <Select
              onChange={onProgressChange}
              disabled={loading}
              options={progressOptions}
            />
          </Form.Item>
        </Box>
        <Box className="form-footer">
          <Button disabled={loading} htmlType="submit">
            Save
          </Button>
        </Box>
      </Form>
    </div>
  );
}
