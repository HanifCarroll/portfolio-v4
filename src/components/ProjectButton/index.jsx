import React from "react";
import styles from "./styles.module.scss";

export const ProjectButton = ({ url, text }) => {
  return (
    <a className={`btn btn-outline-dark ${styles.button}`} href={url}>
      {text}
    </a>
  );
};
