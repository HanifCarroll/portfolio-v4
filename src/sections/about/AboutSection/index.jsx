import React from "react";
import { SectionHeader } from "../../../components/SectionHeader";
import { AboutText } from "../AboutText";

export class AboutSection extends React.Component {
  render() {
    return (
      <div id="about">
        <SectionHeader headingText="About" subheadingText="My Journey" />
        <AboutText />
      </div>
    );
  }
}
