import React from "react";

import styles from "./styles.module.scss";
import { ProjectButton } from "components";

export class Project extends React.Component {
  renderDetails = () => {
    const { title, description, image } = this.props;

    return (
      <div className={styles["content-container"]}>
        <img className={styles.image} src={image} alt={title} />
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    );
  };

  renderButtons = () => {
    const { url, github } = this.props;

    return (
      <div className={styles["button-container"]}>
        <ProjectButton text="View" url={url} />
        {github && <ProjectButton text="Github" url={github} />}
      </div>
    );
  };

  render() {
    return (
      <div className={styles.container}>
        {this.renderDetails()}
        {this.renderButtons()}
      </div>
    );
  }
}
