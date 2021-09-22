import { Heading } from "../../components/shared";

import { TallyCounter } from "../../components/features/tally-counter/TallyCounter";
import { TallyTrain } from "../../components/features/tally-train/TallyTrain";
import { TallyControls } from "../../components/features/tally-controls/TallyControls";

import TallyScoreModule from "./components/tally-score";

const TallyPage = () => {
  return (
    <main>
      <Heading level="2" mb="2">
        New Tally
      </Heading>

      <TallyScoreModule />

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

      <TallyControls />
    </main>
  );
};

export default TallyPage;
