import React from "react";

import styles from "./styles.module.scss";
import { ProjectButton } from "components/ProjectButton";

export default class Project extends React.Component {
  renderDetails = () => {
    const { title, description, image } = this.props;

    return (
      <div>
        <img className={styles.image} src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    );
  };

  renderButtons = () => {
    const { url, github } = this.props;
    return (
      <div>
        <ProjectButton text="View" url={url} />
        {github && <ProjectButton text="Github" url={github} />}
      </div>
    );
  };

  render() {
    return (
      <div>
        {this.renderDetails()}
        {this.renderButtons()}
      </div>
    );
  }
}
