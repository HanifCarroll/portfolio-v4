import React from "react";
import styles from "./styles.module.scss";
import { Jumbotron } from "reactstrap";
export class HomeSection extends React.Component {
  render() {
    return (
      <Jumbotron className={styles.container}>
        <img src={require("../profile.jpg")} alt="Hanif Carroll" />
        <div className={styles["text-container"]}>
          <h1 className={styles.heading}>Hanif Carroll</h1>

          <p className={styles.subheading}>Passionate Programmer</p>
        </div>
      </Jumbotron>
    );
  }
}
