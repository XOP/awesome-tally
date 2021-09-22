import { useDispatch, useSelector } from "react-redux";

import { TallyControls } from "../../../components/features/tally-controls/TallyControls";

import { revert, tallyGoalSelector } from "../../../redux/modules/tally-global";
import { createTrain } from "../../../redux/modules/tally-trains";

const TallyControlsModule = () => {
  const dispatch = useDispatch();

  const goal = useSelector(tallyGoalSelector);

  const handleDone = () => dispatch(createTrain(goal))
  const handleReset = () => null;
  const handleBack = () => dispatch(revert());

  return (
    <TallyControls 
      onDone={handleDone}
      onReset={handleReset}
      onBack={handleBack}
    />
  );
};

export default TallyControlsModule;
