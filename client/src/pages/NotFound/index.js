import { Link } from "react-router-dom";
import { Button } from "../../components";
import "./index.scss";

export default function Index() {
  return (
    <div className="container">
      <h2>page not found</h2>
      <Link to={"/"}>
        <Button>back to home</Button>
      </Link>
    </div>
  );
}
