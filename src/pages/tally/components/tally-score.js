import { useDispatch, useSelector } from "react-redux";

import { TallyScore } from "../../../components/features/tally-score/TallyScore";

import { increase, decrease, tallyGoal } from "../../../redux/modules/tally-global";

const TallyScoreModule = () => {
  const dispatch = useDispatch();

  const handleIncrease = () => dispatch(increase(1));
  const handleDecrease = () => dispatch(decrease(1));

  const goal = useSelector(tallyGoal);

  return (
    <TallyScore 
      goal={goal}
      total={0}
      onPlusClick={handleIncrease}
      onMinusClick={handleDecrease} 
    />
  );
};

export default TallyScoreModule;
