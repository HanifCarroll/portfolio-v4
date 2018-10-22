import React, { Component } from "react";
import {
  AboutSection,
  SkillsSection,
  ProjectsSection,
  SocialIcons
} from "sections";
import { Footer } from "./components/Footer/index";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <SocialIcons />
        <Footer />
      </div>
    );
  }
}

export default App;
