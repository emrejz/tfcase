import { ToastContainer } from "react-toastify";
import Routes from "./Routes";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <>
      <Routes />
      <ToastContainer />
    </>
  );
}
