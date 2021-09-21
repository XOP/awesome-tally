const INCREASE = 'tally/goal/INCREASE';
const DECREASE = 'tally/goal/DECREASE';

const GROW = 'tally/goal/GROW';

const initialState = {
  tallyGoal: 100,
  tallyGoalPrev: 100,
  tallyIncrement: 1
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

export const tallyGoal = state => state.global.tallyGoal;

export default reducer;
