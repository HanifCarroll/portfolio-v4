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
      <Card className={styles.card} outline color="dark">
        <CardImg
          top
          className={title === "Pick My Eats - Android" ? styles.image : null}
          src={image}
          alt={`Screenshot of ${title}`}
        />
        <CardBody>
          <CardTitle>{title}</CardTitle>
          <CardText className={styles.description}>{description}</CardText>
          {this.renderButtons()}
        </CardBody>
      </Card>
    );
  };

  render() {
    return <div>{this.renderCard()}</div>;
  }
}
