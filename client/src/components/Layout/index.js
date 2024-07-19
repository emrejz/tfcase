import { Outlet, useLocation } from "react-router-dom";
import { Header, SideMenu } from "../index.js";
import { routePaths } from "../../constants/routes.js";
import "./index.scss";

export default function Index() {
  const { pathname } = useLocation();
  const isNewGoalPage =
    routePaths.newGoal === pathname || pathname.startsWith(routePaths.editGoal);

  return (
    <div className="layout">
      <Header isNewGoalPage={isNewGoalPage} />
      <main className="main">
        {!isNewGoalPage && <SideMenu />}
        <Outlet />
      </main>
    </div>
  );
}
