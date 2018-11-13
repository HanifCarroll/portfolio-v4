import React from "react";
import styles from "./styles.module.scss";

export const Divider = () => {
  return (
    <div className={styles.container}>
      <hr className={styles.divider} />
    </div>
  );
};
