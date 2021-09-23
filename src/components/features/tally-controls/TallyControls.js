import { useHistory } from "react-router-dom";

import { routeNames } from "../../../routes/routes";

import { Button, Icons, Panel } from "../../shared";

import styles from "./TallyControls.module.css";

const TallyControls = ({
  onDone,
  onReset,
  onBack = () => null,
  isDoneDisabled = false,
  isResetDisabled = false,
}) => {
  const history = useHistory();

  const navigateToMain = () => history.push(routeNames.MAIN);

  const handleBack = () => {
    onBack();
    navigateToMain();
  };

  const handleDone = () => {
    onDone();
    navigateToMain();
  };

  return (
    <Panel>
      <div className={styles.container}>
        <div className={styles.control}>
          <Button onClick={onReset} isIcon disabled={isResetDisabled}>
            <Icons.RefreshCcw />
          </Button>
        </div>
        <div className={styles.control}>
          <Button onClick={handleDone} iconStart={<Icons.Check />} disabled={isDoneDisabled}>
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
