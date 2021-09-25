import { Button } from "../../shared";

import styles from "./SettingButton.module.css";

const SettingButton = ({ children: label, buttonLabel, onClick, icon = null }) => {
  return (
    <div className={styles.root}>
      {icon && <div className={styles.icon}>{icon}</div>}
      <div className={styles.label}>{label}</div>
      <div className={styles.control}>
        <Button onClick={onClick} size="small">
          {buttonLabel}
        </Button>
      </div>
    </div>
  );
};

export { SettingButton };
