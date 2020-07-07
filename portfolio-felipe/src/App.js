import React from "react";
import Header from "./components/header/index";
import "./styleGeral/App.css";
import HomePage from "./page/home";
import AboutMe from "./page/aboutMe";
import WhatDoIDo from "./page/WhatDoIDo";

function App() {
  return (
    <div>
      <Header />
      <HomePage />
      <AboutMe />
      <WhatDoIDo />
    </div>
  );
}

export default App;
