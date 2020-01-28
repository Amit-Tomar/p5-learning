import React from "react";
import P5Wrapper from "react-p5-wrapper";
import probabilityFunctions from "../sketches/probabilityFunctions";
import "../../src/App.css";

function ProbabilityFunctions() {
  return (
    <div className="sketch">{<P5Wrapper sketch={probabilityFunctions} />}</div>
  );
}

export default ProbabilityFunctions;
