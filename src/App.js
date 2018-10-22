import React, { Component } from "react";
import { ProjectsSection, SocialIcons } from "sections";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ProjectsSection />
        <SocialIcons />
      </div>
    );
  }
}

export default App;
