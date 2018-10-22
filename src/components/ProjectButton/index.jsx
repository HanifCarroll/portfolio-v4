import React from "react";
import styles from "./styles.module.scss";

export const ProjectButton = ({ url, text }) => {
  return (
    <a className={styles.button} href={url}>
      {text}
    </a>
  );
};
