import React from "react";
import styles from "./styles.module.scss";
import { Jumbotron } from "reactstrap";
export class HomeSection extends React.Component {
  render() {
    return (
      <Jumbotron id="home" className={styles.container}>
        <div className={styles["image-container"]}>
          <img
            className="img-fluid"
            src={require("../profile.jpg")}
            alt="Hanif Carroll"
          />
        </div>
        <div className={styles["text-container"]}>
          <h1 className={styles.heading}>Hanif </h1>
          <h1 className={styles.heading}>Carroll</h1>
        </div>
      </Jumbotron>
    );
  }
}
