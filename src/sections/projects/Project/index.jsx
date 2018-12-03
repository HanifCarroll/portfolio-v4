import React from "react";
import styles from "./styles.module.scss";
import { GithubButton, ViewButton, Tag } from "components";

export class Project extends React.Component {
  renderTags = () => {
    return (
      <div className={styles.tags}>
        {this.props.tags.map(tag => (
          <Tag name={tag} key={tag} />
        ))}
      </div>
    );
  };

  renderButtons = () => {
    const { url, github } = this.props;

    return (
      <div className={styles.buttonContainer}>
        {github && <GithubButton url={github} />}
        {url && <ViewButton url={url} />}
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
