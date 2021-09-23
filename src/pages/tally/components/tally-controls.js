import { useDispatch, useSelector } from "react-redux";

import { TallyControls } from "../../../components/features/tally-controls/TallyControls";

import { revert, tallyGoalSelector } from "../../../redux/modules/tally-global";
import { createTrain, resetTrain, trainTotalSelector } from "../../../redux/modules/tally-trains";

const TallyControlsModule = () => {
  const dispatch = useDispatch();

  const goal = useSelector(tallyGoalSelector);
  const total = useSelector(trainTotalSelector);

  const isControlDisabled = total === 0;

  const handleDone = () => dispatch(createTrain(goal))
  const handleReset = () => dispatch(resetTrain());
  const handleBack = () => dispatch(revert());

  return (
    <TallyControls 
      isDoneDisabled={isControlDisabled}
      isResetDisabled={isControlDisabled}
      onDone={handleDone}
      onReset={handleReset}
      onBack={handleBack}
    />
  );
};

export default TallyControlsModule;
