import { Heading } from "../../components/shared";

import TallyScore from "./components/tally-score";
import TallyControls from "./components/tally-controls";
import TallyCreate from "./components/tally-create";

const TallyPage = () => {
  return (
    <main>
      <div>
        <Heading level="2" mb="2">
          New Tally
        </Heading>

        <TallyScore />
        <TallyCreate />
      </div>

      <TallyControls />
    </main>
  );
};

export default TallyPage;
