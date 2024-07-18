import { Link } from "react-router-dom";
import { Button } from "../../components";
import "./index.scss";
import { routePaths } from "../../constants/routes";

export default function Index() {
  return (
    <div className="not-found-container">
      <h2>page not found</h2>
      <Link to={routePaths.home}>
        <Button>back to home</Button>
      </Link>
    </div>
  );
}
