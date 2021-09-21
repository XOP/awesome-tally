import MainPage from "../pages/main/main-page";
import TallyPage from "../pages/tally-page";

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
