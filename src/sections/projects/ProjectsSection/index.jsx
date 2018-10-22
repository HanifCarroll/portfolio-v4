import React from "react";
import { Projects } from "../Projects";
import { SectionHeader } from "../../../components/SectionHeader";

export class ProjectsSection extends React.Component {
  render() {
    return (
      <>
        <SectionHeader headingText="Projects" subheadingText="What I've Done" />
        <Projects />
      </>
    );
  }
}
