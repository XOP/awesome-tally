import { useDispatch, useSelector } from "react-redux";

import { TallyScore } from "../../../components/features/tally-score/TallyScore";

import {
  increase,
  decrease,
  tallyGoalSelector,
} from "../../../redux/modules/tally-global";

import { trainTotalSelector } from "../../../redux/modules/tally-trains";

const TallyScoreModule = () => {
  const dispatch = useDispatch();

  const handleIncrease = () => dispatch(increase(1));
  const handleDecrease = () => dispatch(decrease(1));

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
