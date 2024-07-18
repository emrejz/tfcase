import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components";
import { routePaths } from "./constants/routes";

const GoalList = lazy(() =>
  import("./pages").then((module) => ({ default: module.GoalList }))
);
const NewGoal = lazy(() =>
  import("./pages").then((module) => ({ default: module.NewGoal }))
);
const EditGoal = lazy(() =>
  import("./pages").then((module) => ({ default: module.EditGoal }))
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
            <Route path={routePaths.goals} element={<GoalList />}></Route>
            <Route path={routePaths.newGoal} element={<NewGoal />}></Route>
            <Route path={routePaths.editGoal} element={<EditGoal />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}
