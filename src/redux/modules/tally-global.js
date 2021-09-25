import { createSelector } from "reselect";

const INCREASE_GOAL = "tally/global/INCREASE_GOAL";
const DECREASE_GOAL = "tally/global/DECREASE_GOAL";
const GROW_GOAL = "tally/global/GROW_GOAL";
const REVERT_GOAL = "tally/global/REVERT_GOAL";

const SET_TALLY_VALUE = "tally/global/SET_TALLY_VALUE";
const SET_INCREMENT = "tally/global/SET_INCREMENT";
const TOGGLE_GROW = "tally/global/TOGGLE_GROW";

const OPEN_MENU = "tally/global/OPEN_MENU";
const CLOSE_MENU = "tally/global/CLOSE_MENU";

const initialState = {
  tallyGoal: 0,
  tallyGoalPrev: 0,
  tallyIncrement: 0,
  tallyValue: 0,
  growEnabled: true,
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
    const { tallyGoal: goal, tallyIncrement: bump, growEnabled } = state;

    if (!growEnabled) return state;

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

  if (action.type === SET_INCREMENT) {
    return {
      ...state,
      tallyIncrement: action.payload,
    };
  }

  if (action.type === SET_TALLY_VALUE) {
    return {
      ...state,
      tallyValue: action.payload,
    };
  }

  if (action.type === TOGGLE_GROW) {
    const { growEnabled } = state;

    return {
      ...state,
      growEnabled: !growEnabled,
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

export const setIncrement = (value) => {
  return {
    type: SET_INCREMENT,
    payload: value,
  };
};

export const setTallyValue = (value) => {
  return {
    type: SET_TALLY_VALUE,
    payload: value,
  };
};

export const toggleGrow = () => {
  return {
    type: TOGGLE_GROW,
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

export const tallyIncrementSelector = createSelector(
  rootSelector,
  (state) => state.tallyIncrement
);

export const tallyValueSelector = createSelector(
  rootSelector,
  (state) => state.tallyValue
);

export const growEnabledSelector = createSelector(
  rootSelector,
  (state) => state.growEnabled
);

export const menuOpenedSelector = createSelector(
  rootSelector,
  (state) => state.menuOpened
);

export default reducer;
