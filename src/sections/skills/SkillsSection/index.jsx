import React from "react";
import { SectionHeader } from "components/SectionHeader";
import { SkillsList } from "../SkillsList";

export class SkillsSection extends React.Component {
  render() {
    return (
      <div id="skills">
        <SectionHeader
          headingText="Skills"
          subheadingText="What I've Worked With"
        />
        <SkillsList />
      </div>
    );
  }
}
