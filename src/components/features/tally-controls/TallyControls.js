// import clsx from "clsx";

import { useHistory } from "react-router-dom";
import { routeNames } from "../../../routes/routes";
import { Button, Icons, Panel } from "../../shared";

import styles from "./TallyControls.module.css";

const TallyControls = ({ onDone, onReset, onBack = () => null }) => {
  const history = useHistory();

  const handleBack = () => {
    onBack();
    history.push(routeNames.MAIN);
  };

  return (
    <Panel>
      <div className={styles.container}>
        <div className={styles.control}>
          <Button onClick={onReset} isIcon>
            <Icons.RefreshCcw />
          </Button>
        </div>
        <div className={styles.control}>
          <Button onClick={onDone} iconStart={<Icons.Check />}>
            Done
          </Button>
        </div>
        <div className={styles.control}>
          <Button onClick={handleBack} isIcon>
            <Icons.ArrowLeft />
          </Button>
        </div>
      </div>
    </Panel>
  );
};

export { TallyControls };
