import NotFound from "./NotFound";
import "./index.scss";

const hasData = false;

export default function Index() {
  if (hasData) {
    return <div>data</div>;
  }
  return <NotFound />;
}
