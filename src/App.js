import React, { Component } from "react";
import {
  HomeSection,
  AboutSection,
  SkillsSection,
  ProjectsSection,
  SocialIcons
} from "sections";
import { Footer, Header } from "components";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
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
