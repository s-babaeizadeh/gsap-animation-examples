import React from "react";
import "./App.css";
import Animation from "./components/Animation/Animation";
import AnimatingInteraction from "./components/AnimatingInteraction/AnimatingInteraction";
import Example1 from "./components/AdvanceedAnimation/Example1";

const App = () => {
  return (
    <div className="App">
      <div>
        <h1 className="title">GSAP</h1>
        <Animation />
        <AnimatingInteraction />
        <div style={{ marginTop: "20px" }}>
          <Example1 />
        </div>
      </div>
    </div>
  );
};

export default App;
