import { useSelector } from "react-redux";

import { TallyTrain } from "../../../components/features/tally-train/TallyTrain";
import { Heading } from "../../../components/shared";

import { trainsSelector } from "../../../redux/modules/tally-trains";

const TallyTrainsModule = () => {
  const items = useSelector(trainsSelector);

  if (!items.length) {
    return (
      <Heading level='4'>
        No records yet... <br/>
        time to shine!
      </Heading>
    )
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
