// import { Route, Link } from "react-router-dom";

import { Heading } from "../components/shared";

import { TallyTrain } from "../components/features/tally-train/TallyTrain";
import { TallyAdd } from "../components/features/tally-add/TallyAdd";

const MainPage = () => {
  return (
    <main>
      <Heading level="1" mb="2">
        Tally Records
      </Heading>

      <TallyTrain
        goal={110}
        items={[{ value: 30 }, { value: 25 }, { value: 25 }, { value: 20 }]}
      />

      <TallyTrain
        goal={110}
        items={[{ value: 30 }, { value: 30 }, { value: 35 }, { value: 30 }]}
      />

      <TallyAdd />
    </main>
  );
};

export default MainPage;
