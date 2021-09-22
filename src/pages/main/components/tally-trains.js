import { useSelector } from "react-redux";

import { TallyTrain } from "../../../components/features/tally-train/TallyTrain";

import { trainsSelector } from "../../../redux/modules/tally-trains";

const TallyTrainsModule = () => {
  const items = useSelector(trainsSelector);

  return (
    <section>
      {items.map((train, i) => (
        <TallyTrain key={i} goal={train.goal} items={train.items} />
      ))}
    </section>
  );
};

export default TallyTrainsModule;
