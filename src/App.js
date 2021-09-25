import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import AppRouter from "./routes/AppRouter";
import configureStore from "./redux/configure";
import initStore from "./redux/initStore";

const store = configureStore(initStore());

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
          <AppRouter />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
