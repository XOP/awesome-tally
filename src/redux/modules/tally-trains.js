import { createSelector } from "reselect";
import { produce } from "immer";

import { Train } from "../models/tally-train-model";
import { TrainItem } from "../models/tally-item-model";

const CREATE_TRAIN = "tally/trains/CREATE_TRAIN";
const RESET_TRAIN = "tally/trains/RESET_TRAIN";
const PUSH_ITEM = "tally/trains/PUSH_ITEM";
const RESET_TRAIN_ITEMS = "tally/trains/RESET_TRAIN_ITEMS";

const initialState = {
  items: [],
  newTrain: new Train(),
};

//========================================================
// reducer
// ========================================================

const reducer = produce((draft, action = {}) => {
  if (action.type === CREATE_TRAIN) {
      const { newTrain } = draft;
      const item = { ...newTrain, goal: action.payload.goal };

      draft.items.unshift(item);
      draft.newTrain = new Train();
      return;
  }

  if (action.type === RESET_TRAIN) {
    draft.newTrain = new Train();
  }

  if (action.type === RESET_TRAIN_ITEMS) {
    return {
      items: [],
      newTrain: new Train(),
    };
  }

  if (action.type === PUSH_ITEM) {
    const { items, newTrain } = draft;
    const { items: trainItems } = newTrain;

    return {
      items,
      newTrain: { ...newTrain, items: [...trainItems, action.payload] },
    };
  }

  return draft;
}, initialState);

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

export const resetTrain = () => {
  return {
    type: RESET_TRAIN,
  };
};

export const resetTrainItems = () => {
  return {
    type: RESET_TRAIN_ITEMS,
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
