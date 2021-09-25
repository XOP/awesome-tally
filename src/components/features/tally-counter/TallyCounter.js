// import clsx from "clsx";

import { Card, Number, Button, Icons } from "../../shared";

import styles from "./TallyCounter.module.css";

const TallyCounter = ({ onMinusClick, onPlusClick, onNumberClick, value }) => {
  return (
    <div className={styles.root}>
      <Card padding="1">
        <div className={styles.container}>
          <div className={styles.minus}>
            <Button onClick={onMinusClick} isIcon>
              <Icons.Minus />
            </Button>
          </div>

          <div className={styles.number}>
            {onNumberClick === null ? (
              <Number as="chip" size="big">
                {value}
              </Number>
            ) : (
              <Number as="button" onClick={onNumberClick} size="big">
                {value}
              </Number>
            )}
          </div>

          <div className={styles.plus}>
            <Button onClick={onPlusClick} isIcon>
              <Icons.Plus />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export { TallyCounter };
