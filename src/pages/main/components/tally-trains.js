import { useSelector, useDispatch } from "react-redux";

import { Heading, Space } from "../../../components/shared";
import { TallyTrain } from "../../../components/features/tally-train/TallyTrain";
import { TallyCounter } from "../../../components/features/tally-counter/TallyCounter";

import { tallyGoalSelector, increaseGoal, decreaseGoal } from "../../../redux/modules/tally-global";
import { trainsSelector } from "../../../redux/modules/tally-trains";

const TallyTrainsModule = () => {
  const items = useSelector(trainsSelector);
  const goal = useSelector(tallyGoalSelector);

  const dispatch = useDispatch();

  const handleGoalIncrease = () => dispatch(increaseGoal(1));
  const handleGoalDecrease = () => dispatch(decreaseGoal(1));

  if (!items.length) {
    return (
      <div>
        <Heading level="4">No records yet...</Heading>
        <Space size="1" />
        <Heading level="5">Set the goal to get started</Heading>
        <Space size="1" />

        <TallyCounter
          value={goal}
          onMinusClick={handleGoalDecrease}
          onPlusClick={handleGoalIncrease}
          onNumberClick={null}
        />
      </div>
    );
  }

  return (
    <div>
      {items.map((train, i) => (
        <TallyTrain key={i} goal={train.goal} items={train.items} />
      ))}
    </div>
  );
};

export default TallyTrainsModule;
