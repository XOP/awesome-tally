// import { Route, Link } from "react-router-dom";

import { Card, Button, Number } from "../components/shared";

import { TallyTrain } from "../components/features/tally-train/TallyTrain";

const MainPage = () => {
  return (
    <div>
      <h2>Tally Records</h2>

      <TallyTrain
        goal={110}
        items={[{ value: 30 }, { value: 25 }, { value: 25 }, { value: 20 }]}
      />

      <TallyTrain
        goal={110}
        items={[{ value: 30 }, { value: 30 }, { value: 35 }, { value: 30 }]}
      />
    </div>
  );
};

export default MainPage;
