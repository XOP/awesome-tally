import MainPage from "../pages/main";
import TallyPage from "../pages/tally";

const routeNames = {
  'MAIN': '/',
  'TALLY': '/tally',
}

const publicRoutes = [
  {
    path: routeNames.MAIN,
    exact: true,
    component: MainPage
  },
  {
    path: routeNames.TALLY,
    exact: true,
    component: TallyPage
  }
];

const privateRoutes = [];

export { publicRoutes, privateRoutes, routeNames };
