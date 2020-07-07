import React from "react";
import Header from "./components/header/index";
import "./styleGeral/App.css";
import HomePage from "./page/home";
import AboutMe from "./page/aboutMe";
import WhatDoIDo from "./page/WhatDoIDo";
import Education from "./page/education";
import Projects from "./page/projects";

function App() {
  return (
    <div>
      <Header />
      <HomePage />
      <AboutMe />
      <WhatDoIDo />
      <Education />
      <Projects />
    </div>
  );
}

export default App;
