import { useDispatch, useSelector } from "react-redux";

import { TallyScore } from "../../../components/features/tally-score/TallyScore";

import {
  increaseGoal,
  decreaseGoal,
  tallyGoalSelector,
} from "../../../redux/modules/tally-global";

import { trainTotalSelector } from "../../../redux/modules/tally-trains";

const TallyScoreModule = () => {
  const dispatch = useDispatch();

  const handleIncrease = () => dispatch(increaseGoal(1));
  const handleDecrease = () => dispatch(decreaseGoal(1));

  const goal = useSelector(tallyGoalSelector);
  const total = useSelector(trainTotalSelector);

  return (
    <TallyScore
      goal={goal}
      total={total}
      onPlusClick={handleIncrease}
      onMinusClick={handleDecrease}
    />
  );
};

export default TallyScoreModule;
