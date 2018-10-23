import React, { Component } from "react";
import {
  HomeSection,
  AboutSection,
  SkillsSection,
  ProjectsSection,
  ContactSection
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
        <ContactSection />
        <Footer />
      </div>
    );
  }
}

export default App;
