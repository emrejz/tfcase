import { Button } from "antd";
import "./index.scss";

export default function Index({ children, onClick, ...rest }) {
  return (
    <Button className="button" onClick={onClick} {...rest}>
      {children}
    </Button>
  );
}
