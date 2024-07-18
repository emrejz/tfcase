import {
  Home,
  Surveys,
  Feedback,
  Goals,
  OneVOne,
  GoodVibes,
  Reports,
} from "../svgs";

export const routePaths = {
  home: "/home",
  surveys: "/surveys",
  feedback: "/feedback",
  goals: "/goals",
  newGoal: "/goals/new",
  editGoal: "/goals/edit",
  oneVOne: "/one-v-one",
  goodVibes: "/good-vibes",
  reports: "/reports",
};

export const sideMenuRoutes = [
  {
    icon: Home,
    label: "Home",
    path: routePaths.home,
  },
  {
    icon: Surveys,
    label: "Surveys",
    path: routePaths.surveys,
  },
  {
    icon: Feedback,
    label: "Feedback",
    path: routePaths.feedback,
  },
  {
    icon: Goals,
    label: "Goals",
    path: routePaths.goals,
  },
  {
    icon: OneVOne,
    label: "OneVOne",
    path: routePaths.oneVOne,
  },
  {
    icon: GoodVibes,
    label: "Good Vibes",
    path: routePaths.goodVibes,
  },
  {
    icon: Reports,
    label: "Reports",
    path: routePaths.reports,
  },
];
