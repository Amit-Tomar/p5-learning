import React from "react";
import P5Wrapper from "react-p5-wrapper";
import "./App.css";
import sketchInit from "../src/sketches/sketchInit";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <P5Wrapper sketch={sketchInit} />
      </header>
    </div>
  );
}

export default App;
