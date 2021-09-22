import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import AppRouter from "./routes/AppRouter";
import configureStore from "./redux/configure";

const store = configureStore({
  global: {
    tallyGoal: 100,
    tallyGoalPrev: 100,
    tallyIncrement: 1,
  },
  trains: {
    items: [
      {
        goal: 100,
        date: new Date(),
        items: [{ value: 30 }, { value: 25 }, { value: 30 }, { value: 35 }],
      },
      {
        goal: 105,
        date: new Date(),
        items: [
          { value: 35 },
          { value: 30 },
          { value: 30 },
          { value: 15 },
          { value: 15 },
        ],
      },
      {
        goal: 120,
        date: new Date(),
        items: [
          { value: 35 },
          { value: 30 },
          { value: 30 },
          { value: 15 },
          { value: 15 },
        ],
      },
    ],
  },
});

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
