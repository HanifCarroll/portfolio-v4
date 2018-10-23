import React from "react";
import styles from "./styles.module.scss";

export class HomeSection extends React.Component {
  render() {
    return (
      <div id="home" className={styles.container}>
        <img src={require("../profile.jpg")} alt="Hanif Carroll" />
        <div className={styles["text-container"]}>
          <h1 className={styles.heading}>Hanif Carroll</h1>

          <p className={styles.subheading}>
            Developer meets passion. How can we help each other?
          </p>
        </div>
      </div>
    );
  }
}
