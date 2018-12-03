import React from "react";
import styles from "./styles.module.scss";

export const GithubButton = ({ url }) => {
  return (
    <a className={`btn btn-outline-dark ${styles.button}`} href={url}>
      Github
    </a>
  );
};
