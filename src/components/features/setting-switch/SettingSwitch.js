import { Switch } from "../../shared";

import styles from "./SettingSwitch.module.css";

const SettingSwitch = ({ children: label, checked, onChange, icon = null }) => {
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
        <Switch checked={checked} onChange={onChange} />
      </div>
    </div>
  );
};

export { SettingSwitch };
