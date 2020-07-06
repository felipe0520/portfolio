import React from "react";
import Header from "./components/header/index";
import "./styleGeral/App.css";
import HomePage from "./page/home";
import SobreMim from "./page/sobreMim";

function App() {
  return (
    <div>
      <Header />
      <HomePage />
      <SobreMim />
    </div>
  );
}

export default App;
