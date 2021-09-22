const INCREASE = 'tally/goal/INCREASE';
const DECREASE = 'tally/goal/DECREASE';
const GROW = 'tally/goal/GROW';
const REVERT = 'tally/goal/REVERT';

const initialState = {
  tallyGoal: 0,
  tallyGoalPrev: 0,
  tallyIncrement: 0
};

const reducer = (state = initialState, action = {}) => {
  if (action.type === INCREASE) {
    const { tallyGoal: goal } = state;

    return {
      ...state,
      tallyGoal: goal + action.payload
    }
  }

  if (action.type === DECREASE) {
    const { tallyGoal: goal } = state;

    return {
      ...state,
      tallyGoal: goal - action.payload
    }
  }

  if (action.type === GROW) {
    const { tallyGoal: goal, tallyIncrement: bump } = state;

    return {
      ...state,
      tallyGoalPrev: goal,
      tallyGoal: goal + bump
    }
  }

  if (action.type === REVERT) {
    const { tallyGoalPrev: prev } = state;

    return {
      ...state,
      tallyGoal: prev
    }
  }

  return state;
}

export const increase = (value) => {
  return {
    type: INCREASE,
    payload: value
  };
}

export const decrease = (value) => {
  return {
    type: DECREASE,
    payload: value
  };
}

export const grow = () => {
  return {
    type: GROW
  };
}

export const revert = () => {
  return {
    type: REVERT
  };
}

export const tallyGoalSelector = state => state.global.tallyGoal;

export default reducer;
