import { Heading } from "../../components/shared";

import { TallyCounter } from "../../components/features/tally-counter/TallyCounter";
import { TallyTrain } from "../../components/features/tally-train/TallyTrain";

import TallyScore from "./components/tally-score";
import TallyControls from "./components/tally-controls";

const TallyPage = () => {
  return (
    <main>
      <div>
        <Heading level="2" mb="2">
          New Tally
        </Heading>

        <TallyScore />

        <TallyTrain
          items={[
            { value: 30 },
            { value: 20 },
            { value: 30 },
            { value: 20 },
            { value: 30 },
            { value: 20 },
          ]}
        />

        <TallyCounter
          value={25}
          onMinusClick={() => null}
          onPlusClick={() => null}
          onNumberClick={() => null}
        />
      </div>

      <TallyControls />
    </main>
  );
};

export default TallyPage;
