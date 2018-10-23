import React from "react";
import { SectionHeader } from "../../../components/SectionHeader";
import { AboutText } from "../AboutText";
import styles from "./styles.module.scss";

export class AboutSection extends React.Component {
  render() {
    return (
      <div id="about" className={styles.container}>
        <SectionHeader headingText="About" subheadingText="My Journey" />
        <AboutText />
      </div>
    );
  }
}
