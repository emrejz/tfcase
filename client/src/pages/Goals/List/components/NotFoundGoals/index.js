import { Link } from "react-router-dom";
import { Button } from "../../../../../components";
import { routePaths } from "../../../../../constants/routes";
import "./index.scss";

export default function Index() {
  return (
    <div className="not-found-goal-container">
      <img alt="not-found" src="/assets/images/not-found.png" />
      <h2>No goals found</h2>
      <div>Adjust your filters or create a new goal.</div>
      <div>
        Need help? Check out <Link>how it works</Link> for more tips or{" "}
        <Link>send us a message</Link>
      </div>
      <Link to={routePaths.newGoal}>
        <Button>New goal</Button>
      </Link>
    </div>
  );
}
