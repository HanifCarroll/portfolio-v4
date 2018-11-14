import React from "react";
import styles from "./styles.module.scss";

export class HomeSection extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <img src={require("../profile.jpg")} alt="Hanif Carroll" />
        <div className={styles.textContainer}>
          <h1 className={styles.heading}>Hanif Carroll</h1>
          <h3 className={styles.subheading}>Web/Mobile Developer</h3>
        </div>
      </div>
    );
  }
}
