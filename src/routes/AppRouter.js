import { Route, Switch } from "react-router-dom";
import { publicRoutes } from "./routes";

const AppRouter = () => {
  return (
    <Switch>
      {publicRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          exact={route.exact}
          render={(props) => (
            <route.component {...props} routes={route.routes || []} />
          )}
        />
      ))}
    </Switch>
  );
};

export default AppRouter;
