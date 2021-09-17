import { BrowserRouter } from "react-router-dom";

import AppRouter from "./routes/AppRouter";

import styles from "./App.module.css";

function App() {
  return (
    <BrowserRouter>
      <div className={styles.root}>
        <AppRouter />
      </div>
    </BrowserRouter>
  );
}

export default App;
