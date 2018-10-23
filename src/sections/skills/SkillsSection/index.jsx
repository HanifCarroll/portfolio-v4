import React from "react";
import { SectionHeader } from "components/SectionHeader";
import { SkillsList } from "../SkillsList";
import styles from "./styles.module.scss";

export class SkillsSection extends React.Component {
  render() {
    return (
      <div id="skills" className={styles.container}>
        <SectionHeader
          headingText="Skills"
          subheadingText="What I've Worked With"
        />
        <SkillsList />
      </div>
    );
  }
}
