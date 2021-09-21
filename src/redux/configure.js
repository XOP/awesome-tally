import { createStore } from "redux";

import reducer from "./modules/reducer";

const configureStore = (state = {}) =>
  createStore(
    reducer,
    state,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

export default configureStore;
