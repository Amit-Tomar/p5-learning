import React from "react";
import P5Wrapper from "react-p5-wrapper";
import "./App.css";
import sketchInit from "./sketches/init";
import randomWalker from "./sketches/projectiles";
import probabilittyFunctions from "./sketches/probabilittyFunctions";
import perlinNoise from "./sketches/bloodSplatter";
import ants from "./sketches/ants";
import bloodSplatter from "./sketches/bloodSplatter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <P5Wrapper sketch={ants} /> */}
        <P5Wrapper sketch={bloodSplatter} />
        {/* <P5Wrapper sketch={probabilittyFunctions} /> */}
        {/* <P5Wrapper sketch={randomWalker} /> */}
        {/* <P5Wrapper sketch={sketchInit} /> */}
      </header>
    </div>
  );
}

export default App;
