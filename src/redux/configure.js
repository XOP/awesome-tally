import { createStore, applyMiddleware, compose } from "redux";
import { save, load } from "redux-localstorage-simple";

import { Train } from "./models/tally-train-model";

import reducer from "./modules/reducer";

export const KEY = "awesomeTally";

export const presetStore = {
  global: {
    tallyGoal: 100,
    tallyGoalPrev: 100,
    tallyIncrement: 1,
    tallyValue: 25,
    growEnabled: true,
  },
  trains: {
    items: [],
  },
};

const composeEnhancers = (
  process.env.NODE_ENV !== "production" &&
    typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) || compose;

const createStoreWithMiddleware = composeEnhancers(
  applyMiddleware(
    save({
      states: ["global", "trains"],
      namespace: KEY,
      namespaceSeparator: "/",
      debounce: 500,
      disableWarnings: true,
    })
  )
)(createStore);

const configureStore = () =>
  createStoreWithMiddleware(
    reducer,
    load({
      states: ["global", "trains"],
      namespace: KEY,
      namespaceSeparator: "/",
      preloadedState: {
        global: {
          ...presetStore.global,
          menuOpened: false,
        },
        trains: {
          ...presetStore.trains,
          newTrain: new Train(),
        },
      },
      disableWarnings: true,
    })
  );

export default configureStore;
