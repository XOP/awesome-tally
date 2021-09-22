import { Heading } from "../../components/shared";

import TallyCreate from "./components/tally-create";
import TallyTrains from "./components/tally-trains";

import styles from "./MainPage.module.css";

const MainPage = () => {
  return (
    <main className={styles.root}>
      <div className={styles.main}>
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
