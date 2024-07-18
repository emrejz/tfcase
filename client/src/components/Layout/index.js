import { Outlet } from "react-router-dom";
import { Header, SideMenu } from "../index.js";
import "./index.scss";

export default function Index({ children }) {
  return (
    <div className="layout">
      <Header />
      <main className="main">
        <SideMenu />
        <Outlet />
      </main>
    </div>
  );
}
