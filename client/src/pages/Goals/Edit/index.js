import { DatePicker, Form, Input, Select } from "antd";
import { Box, Button } from "../../../components";
import { progressOptions } from "../utils";
import "./index.scss";

export default function Index() {
  const [form] = Form.useForm();

  const onOwnerChange = (value) => {
    form.setFieldsValue({ owner: value });
  };
  const onParentChange = (value) => {
    form.setFieldsValue({ parent: value });
  };

  const onFinish = (values) => {
    console.log("Success:", values);
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
            <Input placeholder="Add goal title" />
          </Form.Item>
          <Form.Item className="goal-desc-input" name="desc">
            <Input placeholder="Add a description" />
          </Form.Item>
        </Box>
        <Box className="box2">
          <div className="goal-owner-label">Goal owner</div>
          <Form.Item className="goal-owner-select" name="owner">
            <Select
              onChange={onOwnerChange}
              style={{ width: "100%" }}
              options={[
                {
                  id: 1,
                  displayName: "Adele Vance",
                  img: "https://teamblee.blob.core.windows.net/teamblee/avatar-adele.jpeg",
                },
                {
                  id: 2,
                  displayName: "Alex Wilber",
                  img: "https://teamblee.blob.core.windows.net/teamblee/avatar-alex.jpeg",
                },
              ].map((item) => ({
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
              <DatePicker placeholder="Start date" />
            </Form.Item>
            <Form.Item name="endDate">
              <DatePicker placeholder="End date" />
            </Form.Item>
          </div>
          <div className="goal-time-label">Parent goal</div>
          <Form.Item className="goal-owner-select" name="parent">
            <Select
              onChange={onParentChange}
              style={{ width: "100%" }}
              options={[
                {
                  id: 1,
                  title: "Adele Vance",
                },
                {
                  id: 2,
                  title: "Alex Wilber",
                },
              ].map((item) => ({ value: item.id, label: item.title }))}
            />
          </Form.Item>
          <div className="goal-time-label">Progress</div>
          <Form.Item className="goal-owner-select" name="progress">
            <Select style={{ width: "100%" }} options={progressOptions} />
          </Form.Item>
        </Box>
        <Box className="form-footer">
          <Button htmlType="submit">Save</Button>
        </Box>
      </Form>
    </div>
  );
}
