import React, { Component } from "react";
import {
  HomeSection,
  AboutSection,
  SkillsSection,
  ProjectsSection,
  ContactSection
} from "sections";
import { Footer, Header } from "components";
import { Container } from "reactstrap";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Header />
          <HomeSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
          <Footer />
        </Container>
      </div>
    );
  }
}

export default App;
