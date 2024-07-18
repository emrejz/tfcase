import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { DatePicker, Form, Input, Select } from "antd";
import { Box, Button } from "../../../components";
import { getUsers, getGoals, postGoal } from "../../../services";
import { routePaths } from "../../../constants/routes";
import "./index.scss";

export default function Index() {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [users, setUsers] = useState();
  const [goals, setGoals] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [userData, goalData] = await Promise.all([
          getUsers(),
          getGoals(),
        ]);

        setGoals(goalData);
        setUsers(userData);
      } catch (error) {
        alert(error.message);
      }
    };

    fetchData();
  }, []);

  const onOwnerChange = (value) => {
    form.setFieldsValue({ owner: value });
  };
  const onParentChange = (value) => {
    form.setFieldsValue({ parent: value });
  };

  const onFinish = async (values) => {
    try {
      setLoading(true);
      await postGoal(values);
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
              options={goals?.map((item) => ({
                value: item.id,
                label: item.title,
              }))}
            />
          </Form.Item>
        </Box>
        <Box className="form-footer">
          <Button disabled={loading} htmlType="submit">
            Publish
          </Button>
        </Box>
      </Form>
    </div>
  );
}
