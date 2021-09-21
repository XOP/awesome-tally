// import clsx from "clsx";

import { Card, Number, Button, Icons } from "../../shared";

import styles from "./TallyScore.module.css";

const TallyScore = ({ goal, total, onPlusClick, onMinusClick }) => {
  const message = "";

  return (
    <div className={styles.root}>
      <Card padding="1">
        <div className={styles.container}>
          <section className={styles.score}>
            <span className={styles.total}>
              <Number as="text" size="big">
                {total}
              </Number>
            </span>
            <span className={styles.divider}>/</span>
            <span className={styles.goal}>
              <Number as="text" size="big">
                {goal}
              </Number>
            </span>
          </section>

          <aside className={styles.counter}>
            <div className={styles.up}>
              <Button onClick={onPlusClick} size="small" isIcon>
                <Icons.ChevronUp />
              </Button>
            </div>
            <div className={styles.down}>
              <Button onClick={onMinusClick} size="small" isIcon>
                <Icons.ChevronDown />
              </Button>
            </div>
          </aside>

          {!!message && <aside className={styles.message}>{message}</aside>}
        </div>
      </Card>
    </div>
  );
};

export { TallyScore };
