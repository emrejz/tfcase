import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NotFoundGoals } from "../components";
import { Box, Button } from "../../../components";
import { routePaths } from "../../../constants/routes";
import { getGoals } from "../../../services";
import { Detail, Hamburger, List, Three } from "../../../svgs";
import "./index.scss";
import dayjs from "dayjs";
import { Progress } from "antd";

export default function Index() {
  const [goals, setGoals] = useState();
  const [isThree, setIsThree] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getGoals();
        setGoals(data);
      } catch (error) {
        alert(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <h2>loading...</h2>;
  }
  if (goals) {
    return (
      <div className="goal-list-container">
        <div className="head">
          <div>Goals</div>
          <Link to={routePaths.newGoal}>
            <Button>New goal</Button>
          </Link>
        </div>
        <Box className="list-type">
          <div
            onClick={() => setIsThree(true)}
            className={isThree ? "selected" : ""}
          >
            <Three />
            <span>Tree</span>
          </div>
          <div
            onClick={() => setIsThree(false)}
            className={!isThree ? "selected" : ""}
          >
            <List />
            <span>List</span>
          </div>
        </Box>
        {isThree ? (
          <div>emre</div>
        ) : (
          <div className="goal-list">
            {goals?.map((item) => (
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
            ))}
          </div>
        )}
      </div>
    );
  }
  return <NotFoundGoals />;
}
