import React from "react";
import styles from "./styles.module.scss";

export class Project extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <img
          className={
            this.props.title === "Pick My Eats - Android"
              ? styles.portrait
              : null
          }
          src={this.props.image}
          alt={this.props.title}
        />
      </div>
    );
  }
}
