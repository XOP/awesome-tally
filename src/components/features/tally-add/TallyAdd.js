// import clsx from "clsx";

import { useHistory } from "react-router-dom";
import { routeNames } from "../../../routes/routes";

import { Panel, Button, Icons } from "../../shared";

import styles from "./TallyAdd.module.css";

const TallyAdd = ({ onMenu, onNew = () => null }) => {
  const history = useHistory();

  const handleNew = () => {
    onNew();
    history.push(routeNames.TALLY);
  };

  return (
    <Panel>
      <div className={styles.container}>
        <div className={styles.control}>
          <Button onClick={onMenu} isIcon>
            <Icons.Settings />
          </Button>
        </div>
        <div className={styles.control}>
          <Button onClick={handleNew} iconStart={<Icons.Star />}>
            New
          </Button>
        </div>
      </div>
    </Panel>
  );
};

export { TallyAdd };
