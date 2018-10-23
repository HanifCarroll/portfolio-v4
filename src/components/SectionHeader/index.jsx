import React from "react";
import styles from "./styles.module.scss";

export const SectionHeader = ({ headingText, subheadingText }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>{headingText}</h1>
      <h2 className={styles.subheading}>{subheadingText}</h2>
    </div>
  );
};
