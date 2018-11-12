import React from "react";
import styles from "./styles.module.scss";

export const Tag = ({ name }) => {
  return <span className={styles.tag}>{name}</span>;
};
