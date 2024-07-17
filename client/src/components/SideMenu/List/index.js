import { sideMenuRoutes } from "../../../constants/routes";
import "./index.scss";

export default function Index() {
  return (
    <ul className="list">
      {sideMenuRoutes.map(({ icon: Icon, label, path }) => (
        <li key={path}>
          <Icon />
          <span>{label}</span>
        </li>
      ))}
    </ul>
  );
}
