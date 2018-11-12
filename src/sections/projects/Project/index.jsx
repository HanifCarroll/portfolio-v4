import React from "react";
import styles from "./styles.module.scss";

export class Project extends React.Component {
  render() {
    return (
      <div
        className={styles.container}
        style={{
          background: `url(${this.props.image}) center center/cover`,
        }}
      >
        <div className={styles.overlay}>
          <p>Test</p>
          <p>Test</p>
          <p>Test</p>
          <p>Test</p>
        </div>
        <img
          className={styles.image}
          src={this.props.image}
          alt={this.props.title}
        />
      </div>
    );
  }
}
