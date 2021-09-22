import { createStore } from "redux";

import { Train } from "./models/tally-train-model";

import reducer from "./modules/reducer";

const configureStore = (state = {}) =>
  createStore(
    reducer,
    {
      ...state,
      trains: {
        ...state.trains,
        newTrain: new Train(),
      },
    },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

export default configureStore;
