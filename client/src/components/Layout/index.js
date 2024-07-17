import { Header, SideMenu } from "../index.js";
import "./index.scss";

export default function Index({ children }) {
  return (
    <>
      <Header />
      <main className="main">
        <SideMenu />
        {children}
      </main>
    </>
  );
}
