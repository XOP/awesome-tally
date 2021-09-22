import { useDispatch } from "react-redux";

import { TallyControls } from "../../../components/features/tally-controls/TallyControls";

import { revert } from "../../../redux/modules/tally-global";

const TallyControlsModule = () => {
  const dispatch = useDispatch();

  const handleDone = () => null;
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
