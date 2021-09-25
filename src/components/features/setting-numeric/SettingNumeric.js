import { Numeric } from "../../shared";

import styles from "./SettingNumeric.module.css";

const SettingNumeric = ({ children: label, value, onChange, icon = null }) => {
  return (
    <div className={styles.root}>
      {
        icon &&
        <div className={styles.icon}>
          {icon}
        </div>
      }
      <div className={styles.label}>
        {label}
      </div>
      <div className={styles.control}>
        <Numeric value={value} onChange={onChange} />
      </div>
    </div>
  );
};

export { SettingNumeric };
