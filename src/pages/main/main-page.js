import { Heading } from "../../components/shared";

import { TallyTrain } from "../../components/features/tally-train/TallyTrain";

import  TallyCreate from "./components/tally-create";

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

      <TallyCreate />
    </main>
  );
};

export default MainPage;
