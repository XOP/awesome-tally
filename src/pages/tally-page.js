import { Heading } from "../components/shared";

import { TallyCounter } from "../components/features/tally-counter/TallyCounter";
import { TallyTrain } from "../components/features/tally-train/TallyTrain";
import { TallyScore } from "../components/features/tally-score/TallyScore";
import { TallyControls } from "../components/features/tally-controls/TallyControls";

const TallyPage = () => {
  return (
    <main>
      <Heading level="2" mb="1">
        New Tally
      </Heading>

      <TallyScore
        goal={120}
        total={60}
        onMinusClick={() => null}
        onPlusClick={() => null}
      />

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
