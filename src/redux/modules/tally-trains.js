import { createSelector } from "reselect";

import { Train } from "../models/tally-train-model";

const CREATE = "tally/trains/CREATE";

const initialState = {
  items: [],
  newItem: new Train(),
};

const reducer = (state = initialState, action = {}) => {
  if (action.type === CREATE) {
    const { items } = state;

    return {
      items: [action.payload, ...items],
    };
  }

  return state;
};

export const create = ({ goal, items }) => {
  return {
    type: CREATE,
    payload: new Train(goal, items),
  };
};

export const trainsSelector = createSelector(
  (state) => state.trains,
  (trains) => trains.items
);

export default reducer;
