import { Button } from "antd";
import "./index.scss";

export default function Index({ children, onClick }) {
  return (
    <Button className="button" onClick={onClick}>
      {children}
    </Button>
  );
}
