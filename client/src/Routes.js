import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components";
import { routePaths } from "./constants/routes";

const Goals = lazy(() =>
  import("./pages").then((module) => ({ default: module.Goals }))
);
const NotFound = lazy(() =>
  import("./pages").then((module) => ({ default: module.NotFound }))
);

export default function Index() {
  return (
    <Suspense fallback={<h1>loading...</h1>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path={routePaths.goals} element={<Goals />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}
