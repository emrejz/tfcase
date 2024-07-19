import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Box, Button } from "../../../components";
import { routePaths } from "../../../constants/routes";
import { getGoals } from "../../../services";
import { List, Three } from "../../../svgs";
import { ThreeList, BasicList, NotFoundGoals } from "./components";
import "./index.scss";

export default function Index() {
  const [goals, setGoals] = useState();
  const [isThree, setIsThree] = useState(true);
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
        {isThree ? <ThreeList goals={goals} /> : <BasicList goals={goals} />}
      </div>
    );
  }
  return <NotFoundGoals />;
}
