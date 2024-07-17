import { Qm, Settings } from "../../svgs";
import "./index.scss";

export default function Index() {
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
