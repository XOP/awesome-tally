import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import AppRouter from "./routes/AppRouter";

import initStore from './redux/initStore';
import configureStore from "./redux/configure";

initStore();

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename={window.location.pathname || ''}>
          <AppRouter />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
