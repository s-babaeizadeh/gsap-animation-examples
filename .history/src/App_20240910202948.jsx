import React from "react";
import "./App.css";
import Animation from "./components/Animation/Animation";
import AnimatingInteraction from "./components/AnimatingInteraction/AnimatingInteraction";
import Example1 from "./components/AdvanceedAnimation/Example1";
import Example2 from "./components/AdvanceedAnimation/Example2";
import Example3 from "./components/AdvanceedAnimation/Example3";

const App = () => {
  return (
    <div className="App">
      <div>
        <h1 className="title">GSAP</h1>
        <Animation />
        <AnimatingInteraction />
        <Example1 />
        <Example2 />
        <Example3 />
      </div>
    </div>
  );
};

export default App;
