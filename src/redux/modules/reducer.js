import { combineReducers } from "redux";

import tallyGlobal from "./tally-global";
import tallyTrains from "./tally-trains";

const reducer = combineReducers({
  global: tallyGlobal,
  trains: tallyTrains
});

export default reducer;
