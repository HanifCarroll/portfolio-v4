import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import styles from "./styles.module.scss";
import { ProjectButton } from "components";

export class Project extends React.Component {
  renderButtons = () => {
    const { url, github } = this.props;

    return (
      <div className={styles["button-container"]}>
        <ProjectButton text="View" url={url} />
        {github && <ProjectButton text="Github" url={github} />}
      </div>
    );
  };

  renderCard = () => {
    const { title, description, image } = this.props;

    return (
      <Card className={styles.card}>
        <CardImg top width="100%" src={image} alt={`Screenshot of ${title}`} />
        <CardBody>
          <CardTitle>{title}</CardTitle>
          <CardText>{description}</CardText>
          {this.renderButtons()}
        </CardBody>
      </Card>
    );
  };

  render() {
    return <div>{this.renderCard()}</div>;
  }
}
