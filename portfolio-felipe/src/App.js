import React from "react";
import Header from "./components/header/index";
import "./styleGeral/App.css";
import HomePage from "./page/home";
import SobreMim from "./page/sobreMim";
import OQueFaco from "./page/oQueFaco";

function App() {
  return (
    <div>
      <Header />
      <HomePage />
      <SobreMim />
      <OQueFaco />
    </div>
  );
}

export default App;
