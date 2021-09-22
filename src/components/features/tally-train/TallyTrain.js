import clsx from "clsx";

import { Card, Number } from "../../shared";

import styles from "./TallyTrain.module.css";

const TallyTrain = ({ items, goal = 0 }) => {
  if (!items ?? !items.length) return null;

  const total = items.reduce((acc, cur) => {
    return acc + cur.value;
  }, 0);

  const extra = total - goal;
  const isExtra = extra > 0;
  const isUnder = extra < 0;

  const showExtras = goal > 0;

  return (
    <div className={styles.root}>
      <Card padding="0" className={styles.card}>
        <div className={styles.container}>
          {showExtras && total && (
            <section className={styles.summary}>
              <div
                className={clsx(styles.goal, {
                  [styles["goal--done"]]: isExtra,
                })}
              >
                {goal}
              </div>
              <div
                className={clsx(styles.total, {
                  [styles["goal--done"]]: isExtra,
                  [styles["goal--under"]]: isUnder,
                })}
              >
                {total}
              </div>
            </section>
          )}

          <section className={styles.items}>
            <div className={styles.grid}>
              {items.map((item, i) => {
                return (
                  <Number className={styles.unit} key={i}>
                    {item.value}
                  </Number>
                );
              })}
            </div>
          </section>
        </div>
      </Card>
      {showExtras && isExtra && (
        <Card className={styles.extra} padding="0.25">
          {`+ ${extra}`}
        </Card>
      )}
    </div>
  );
};

export { TallyTrain };
