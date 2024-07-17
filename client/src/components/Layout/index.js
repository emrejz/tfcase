import { Header } from "../";

export default function Index({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
