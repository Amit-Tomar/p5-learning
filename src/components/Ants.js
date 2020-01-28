import React from "react";
import P5Wrapper from "react-p5-wrapper";
import ants from "../sketches/ants";
import "../../src/App.css";

function Ants() {
  return <div className="sketch">{<P5Wrapper sketch={ants} />}</div>;
}

export default Ants;
