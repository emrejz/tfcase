import { Link } from "react-router-dom";
import dayjs from "dayjs";
import { Progress } from "antd";
import { Box } from "../../../../../components";
import { Detail, Hamburger } from "../../../../../svgs";
import { routePaths } from "../../../../../constants/routes";
import "./index.scss";

export default function index({ goals }) {
  return (
    <div className="goal-list">
      {goals?.map((item) => (
        <Link to={routePaths.editGoal + "/" + item.id}>
          <Box className="item" key={item?.id}>
            <div className="left-side">
              <Hamburger />
              <img src="/assets/images/goal-title.png" alt="goal title" />
              <img src={item?.ownerImg} alt="goal title" />
              <div className="title">{item?.title}</div>
            </div>
            <div className="right-side">
              <div className="time-div">
                {item?.endDate
                  ? dayjs(item?.endDate).format("MMM D, YYYY")
                  : "-"}
              </div>
              <Progress
                className="progress"
                percent={item?.progress}
                status="active"
              />
              <div className="on-track">On track</div>
              <Detail />
            </div>
          </Box>
        </Link>
      ))}
    </div>
  );
}
