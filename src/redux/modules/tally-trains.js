import { createSelector } from "reselect";

import { Train } from "../models/tally-train-model";
import { TrainItem } from "../models/tally-item-model";

const CREATE_TRAIN = "tally/trains/CREATE_TRAIN";
const PUSH_ITEM = "tally/trains/PUSH_ITEM";

const initialState = {
  items: [],
  newTrain: new Train(),
};

//========================================================
// reducer
// ========================================================

const reducer = (state = initialState, action = {}) => {
  if (action.type === CREATE_TRAIN) {
    const { items, newTrain } = state;

    return {
      items: [{ ...newTrain, goal: action.payload.goal }, ...items],
      newTrain: new Train(),
    };
  }

  if (action.type === PUSH_ITEM) {
    const { items, newTrain } = state;
    const { items: trainItems } = newTrain;

    return {
      items,
      newTrain: { ...newTrain, items: [...trainItems, action.payload] },
    };
  }

  return state;
};

//========================================================
// actions
// ========================================================

export const createTrain = (goal) => {
  return {
    type: CREATE_TRAIN,
    payload: {
      goal,
    },
  };
};

export const pushItem = (value) => {
  return {
    type: PUSH_ITEM,
    payload: new TrainItem(value),
  };
};

//========================================================
// selectors
// ========================================================

const rootSelector = (state) => state.trains;

export const trainsSelector = createSelector(
  rootSelector,
  (trains) => trains.items
);

export const trainItemsSelector = createSelector(
  rootSelector,
  (trains) => trains.newTrain.items
);

export const trainTotalSelector = createSelector(
  trainItemsSelector,
  (items) => {
    const total = items.reduce((acc, cur) => {
      return acc + cur.value;
    }, 0);

    return total;
  }
);

export default reducer;
