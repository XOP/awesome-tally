import { createStore } from "redux";

import combinedReducer from "./reducer";

const store = createStore(combinedReducer);

export default store;
