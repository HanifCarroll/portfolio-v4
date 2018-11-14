import React, { Component } from "react";
import {
  HomeSection,
  AboutSection,
  SkillsSection,
  ProjectsSection,
} from "sections";
import { Footer, Header, Divider } from "components";
import { Container } from "reactstrap";

class App extends Component {
  componentDidMount() {
    // This will capture hash changes while on the page
    window.addEventListener("hashchange", this.offsetAnchor);
  }

  offsetAnchor = () => {
    const navHeight = document.getElementById("nav").clientHeight;
    if (window.location.hash.length !== 0) {
      window.scrollTo(window.scrollX, window.scrollY - navHeight);
    }
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Container>
          <HomeSection />
          <AboutSection />
          <Divider />
          <SkillsSection />
          <Divider />
          <ProjectsSection />
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;
