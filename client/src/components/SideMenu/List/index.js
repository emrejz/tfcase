import { Link, useLocation } from "react-router-dom";
import { sideMenuRoutes } from "../../../constants/routes";
import "./index.scss";

export default function Index() {
  const { pathname } = useLocation();

  return (
    <ul className="list">
      {sideMenuRoutes.map(({ icon: Icon, label, path }) => (
        <Link key={path} to={path}>
          <li className={pathname.startsWith(path) ? "blue" : ""}>
            <span className="box"></span>
            <Icon />
            <span>{label}</span>
          </li>
        </Link>
      ))}
    </ul>
  );
}
