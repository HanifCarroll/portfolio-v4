import React from "react";
import { Project } from "../Project";
import { projectsData } from "../projectsData";
import styles from "./styles.module.scss";

export class Projects extends React.Component {
  state = {
    projects: projectsData
  };

  renderProjects = () => {
    return this.state.projects.map(project => (
      <div className={styles.container}>
        <Project
          key={project.title}
          title={project.title}
          description={project.description}
          image={project.image}
          url={project.url}
          github={project.github}
        />
      </div>
    ));
  };

  render() {
    return this.renderProjects();
  }
}
