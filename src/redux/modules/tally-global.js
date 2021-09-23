import { createSelector } from "reselect";

const INCREASE_GOAL = "tally/global/INCREASE_GOAL";
const DECREASE_GOAL = "tally/global/DECREASE_GOAL";
const GROW_GOAL = "tally/global/GROW_GOAL";
const REVERT_GOAL = "tally/global/REVERT_GOAL";

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
  if (action.type === INCREASE_GOAL) {
    const { tallyGoal: goal } = state;

    return {
      ...state,
      tallyGoal: goal + action.payload,
    };
  }

  if (action.type === DECREASE_GOAL) {
    const { tallyGoal: goal } = state;

    return {
      ...state,
      tallyGoal: goal - action.payload,
    };
  }

  if (action.type === GROW_GOAL) {
    const { tallyGoal: goal, tallyIncrement: bump } = state;

    return {
      ...state,
      tallyGoalPrev: goal,
      tallyGoal: goal + bump,
    };
  }

  if (action.type === REVERT_GOAL) {
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

export const increaseGoal = (value) => {
  return {
    type: INCREASE_GOAL,
    payload: value,
  };
};

export const decreaseGoal = (value) => {
  return {
    type: DECREASE_GOAL,
    payload: value,
  };
};

export const growGoal = () => {
  return {
    type: GROW_GOAL,
  };
};

export const revertGoal = () => {
  return {
    type: REVERT_GOAL,
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
  (state) => state.tallyGoal
);

export const menuOpenedSelector = createSelector(
  rootSelector,
  (state) => state.menuOpened
);

export default reducer;
