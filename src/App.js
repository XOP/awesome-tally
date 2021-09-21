import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import AppRouter from "./routes/AppRouter";
import configureStore from "./redux/configure";

import styles from "./App.module.css";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className={styles.root}>
          <AppRouter />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
