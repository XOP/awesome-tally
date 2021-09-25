import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { TallyCounter } from "../../../components/features/tally-counter/TallyCounter";
import { TallyTrain } from "../../../components/features/tally-train/TallyTrain";

import { tallyValueSelector } from "../../../redux/modules/tally-global";

import {
  pushItem,
  trainItemsSelector,
} from "../../../redux/modules/tally-trains";

const TallyCreateModule = () => {
  const tallyValueInit = useSelector(tallyValueSelector);
  const [tallyValue, setTallyValue] = useState(tallyValueInit);

  const handleIncrease = () => setTallyValue(tallyValue + 1);
  const handleDecrease = () => setTallyValue(tallyValue - 1);

  const dispatch = useDispatch();

  const handlePushItem = () => {
    return dispatch(pushItem(tallyValue));
  };

  const trainItems = useSelector(trainItemsSelector);

  return (
    <section>
      <TallyTrain items={trainItems} />

      <TallyCounter
        value={tallyValue}
        onMinusClick={handleDecrease}
        onPlusClick={handleIncrease}
        onNumberClick={handlePushItem}
      />
    </section>
  );
};

export default TallyCreateModule;
