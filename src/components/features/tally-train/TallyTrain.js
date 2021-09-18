import clsx from 'clsx';
import { Card, Number } from "../../shared";
import styles from "./TallyTrain.module.css";

const TallyTrain = ({ items, goal }) => {
  if (!items ?? !items.length) return null;

  const total = items.reduce((acc, cur) => {
    return acc + cur.value;
  }, 0);

  const extra = total - goal;
  const isExtra = extra > 0;
  const isUnder = extra < 0;

  return (
    <div className={styles.root}>
      <Card padding="0">
        <div className={styles.container}>
          {total && goal && 
          <section className={styles.summary}>
            <div className={clsx(styles.goal, {
              [styles['goal--done']] : isExtra
            })}>{goal}</div>
            <div className={clsx(styles.total, {
              [styles['goal--done']]: isExtra,
              [styles['goal--under']]: isUnder,
            })}>{total}</div>
            </section>
            }

          <section className={styles.items}>
          {
            items.map((item, i) => {
              return (
                <Number className={styles.unit} key={i}>{item.value}</Number>
              )
            })
          }
          </section>
        </div>
      </Card>
      {
        isExtra &&
        <Card className={styles.extra} padding="0.5">
          {`+ ${extra}`}
        </Card>
      }
    </div>
  );
};

export { TallyTrain };
