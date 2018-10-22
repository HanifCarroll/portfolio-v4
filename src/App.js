import React, { Component } from "react";
import { ProjectsSection, SocialIcons } from "sections";
import { Footer } from "./components/Footer/index";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ProjectsSection />
        <SocialIcons />
        <Footer />
      </div>
    );
  }
}

export default App;
