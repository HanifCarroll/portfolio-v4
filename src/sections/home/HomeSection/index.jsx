import React from "react";
import styles from "./styles.module.scss";

export class HomeSection extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <img src={require("../profile.jpg")} alt="Hanif Carroll" />
        <div className={styles["text-container"]}>
          <p>
            Budding developer looking to make a positive impact on the world
            around him. How can we help each other?
          </p>
          <h1>Hanif Carroll</h1>
          <h2>Web Developer</h2>
        </div>
      </div>
    );
  }
}
