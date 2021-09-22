import { Heading } from "../../components/shared";

import TallyCreate from "./components/tally-create";
import TallyTrains from "./components/tally-trains";

const MainPage = () => {
  return (
    <main>
      <div>
        <Heading level="2" mb="3">
          Tally Records
        </Heading>
        <TallyTrains />
      </div>
      <TallyCreate />
    </main>
  );
};

export default MainPage;
