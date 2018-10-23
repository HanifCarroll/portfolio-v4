import React from "react";
import { Projects } from "../Projects";
import { SectionHeader } from "../../../components/SectionHeader";
import styles from "./styles.module.scss";

export class ProjectsSection extends React.Component {
  render() {
    return (
      <div id="projects" className={styles.container}>
        <SectionHeader headingText="Projects" subheadingText="What I've Done" />
        <Projects />
      </div>
    );
  }
}
