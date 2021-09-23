import { createSelector } from "reselect";

const INCREASE = "tally/global/INCREASE";
const DECREASE = "tally/global/DECREASE";
const GROW = "tally/global/GROW";
const REVERT = "tally/global/REVERT";

const OPEN_MENU = "tally/global/OPEN_MENU";
const CLOSE_MENU = "tally/global/CLOSE_MENU";

const initialState = {
  tallyGoal: 0,
  tallyGoalPrev: 0,
  tallyIncrement: 0,
  menuOpened: false,
};

//========================================================
// reducer
// ========================================================

const reducer = (state = initialState, action = {}) => {
  if (action.type === INCREASE) {
    const { tallyGoal: goal } = state;

    return {
      ...state,
      tallyGoal: goal + action.payload,
    };
  }

  if (action.type === DECREASE) {
    const { tallyGoal: goal } = state;

    return {
      ...state,
      tallyGoal: goal - action.payload,
    };
  }

  if (action.type === GROW) {
    const { tallyGoal: goal, tallyIncrement: bump } = state;

    return {
      ...state,
      tallyGoalPrev: goal,
      tallyGoal: goal + bump,
    };
  }

  if (action.type === REVERT) {
    const { tallyGoalPrev: prev } = state;

    return {
      ...state,
      tallyGoal: prev,
    };
  }

  if (action.type === OPEN_MENU) {
    return {
      ...state,
      menuOpened: true,
    };
  }

  if (action.type === CLOSE_MENU) {
    return {
      ...state,
      menuOpened: false,
    };
  }

  return state;
};

//========================================================
// actions
// ========================================================

export const increase = (value) => {
  return {
    type: INCREASE,
    payload: value,
  };
};

export const decrease = (value) => {
  return {
    type: DECREASE,
    payload: value,
  };
};

export const grow = () => {
  return {
    type: GROW,
  };
};

export const revert = () => {
  return {
    type: REVERT,
  };
};

export const openMenu = () => {
  return {
    type: OPEN_MENU,
  };
};

export const closeMenu = () => {
  return {
    type: CLOSE_MENU,
  };
};

//========================================================
// selectors
// ========================================================

const rootSelector = (state) => state.global;

export const tallyGoalSelector = createSelector(
  rootSelector,
  state => state.tallyGoal
);

export const menuOpenedSelector = createSelector(
  rootSelector,
  state => state.menuOpened
);

export default reducer;
