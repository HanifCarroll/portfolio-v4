import React from "react";
import styles from "./styles.module.scss";
import { ProjectButton } from "components";
import { Tag } from "../../../components/Tag";

export class Project extends React.Component {
  renderTags = () => {
    return (
      <div className={styles.tags}>
        {this.props.tags.map(tag => (
          <Tag name={tag} />
        ))}
      </div>
    );
  };

  renderButtons = () => {
    const { url, github } = this.props;

    return (
      <div className={styles.buttonContainer}>
        <ProjectButton text="View" url={url} />
        {github && <ProjectButton text="Github" url={github} />}
      </div>
    );
  };

  render() {
    const { title, image } = this.props;

    return (
      <div
        className={styles.container}
        style={{
          background: `url(${image}) center center/cover`,
        }}
      >
        <div className={styles.overlay}>
          <p className={styles.title}>{title}</p>
          {this.renderTags()}
          {this.renderButtons()}
        </div>
        <img className={styles.image} src={image} alt={title} />
      </div>
    );
  }
}
