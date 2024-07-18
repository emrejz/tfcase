import { Link, useLocation } from "react-router-dom";
import { Back, Close, Qm, Settings } from "../../svgs";
import { routePaths } from "../../constants/routes";
import "./index.scss";

export default function Index() {
  const { pathname } = useLocation();
  const isNewGoalPage = routePaths.newGoal === pathname;

  if (isNewGoalPage) {
    return (
      <header className="header">
        <div className="left-box">
          <Link to={routePaths.goals}>
            <Back />
          </Link>
          <h2 className="title">Add new goal</h2>
        </div>
        <div className="right-box">
          <Link to={routePaths.goals}>
            <Close />
          </Link>
        </div>
      </header>
    );
  }

  return (
    <header className="header">
      <img className="logo" alt="logo" src="./assets/images/logo.png" />
      <div className="right-box">
        <Qm />
        <Settings />
      </div>
    </header>
  );
}
