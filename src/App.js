import React, { Component } from "react";
import {
  AboutSection,
  SkillsSection,
  ProjectsSection,
  SocialIcons
} from "sections";
import { Footer } from "./components/Footer/index";
import { HomeSection } from "./sections/home/HomeSection";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomeSection />
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
