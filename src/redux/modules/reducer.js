import { combineReducers } from "redux";

import tallyGlobal from "./tally-global";

const reducer = combineReducers({
  global: tallyGlobal
});

export default reducer;
