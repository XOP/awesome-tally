// import clsx from "clsx";

import { useHistory } from "react-router-dom";
import  { routeNames } from '../../../routes/routes';

import { Card, Button, Icons } from "../../shared";

import styles from "./TallyAdd.module.css";

const TallyAdd = ({ onNew = () => null }) => {
  const history = useHistory();

  const handleNew = () => {
    onNew();
    history.push(routeNames.TALLY);
  }

  return (
    <div className={styles.root}>
      <Card padding="1">
        <div className={styles.container}>

          <div className={styles.control}>
            <Button onClick={handleNew} iconStart={<Icons.Star />}>
              New
            </Button>
          </div>

        </div>
      </Card>
    </div>
  );
};

export { TallyAdd };
