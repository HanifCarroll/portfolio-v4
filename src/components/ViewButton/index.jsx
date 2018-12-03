import React from "react";
import styles from "./styles.module.scss";

export const ViewButton = ({ url }) => {
  return (
    <a className={`btn btn-outline-dark ${styles.view}`} href={url}>
      View
    </a>
  );
};
