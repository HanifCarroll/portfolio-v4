import React from "react";
import styles from "./styles.module.scss";

export const SectionHeader = ({ headingText, subheadingText }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>{headingText}</h3>
      <p className={styles.subheading}>{subheadingText}</p>
    </div>
  );
};
