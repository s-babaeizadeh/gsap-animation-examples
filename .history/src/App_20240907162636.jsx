import React from "react";
import "./App.css";
import Animation from "./components/Animation/Animation";
import AnimatingInteraction from "./components/AnimatingInteraction/AnimatingInteraction";

const App = () => {
  return (
    <div className="App">
      <div>
        <h1 className="title">GSAP</h1>
        <Animation />
        <AnimatingInteraction />
      </div>
    </div>
  );
};

export default App;
