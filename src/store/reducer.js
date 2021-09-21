import { combineReducers } from "redux";

const combinedReducer = combineReducers(
  trainInfoReducer,
  trainItemsReducer
);

export default combinedReducer;
