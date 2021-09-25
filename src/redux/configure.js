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
    growEnabled: true,
  },
  trains: {
    items: [],
  },
};

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const createStoreWithMiddleware = compose(
  applyMiddleware(
    save({
      states: ["global", "trains"],
      namespace: KEY,
      namespaceSeparator: "/",
      debounce: 500,
      disableWarnings: true
    })
  ),
  devTools
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
      disableWarnings: true
    })
  );

export default configureStore;
