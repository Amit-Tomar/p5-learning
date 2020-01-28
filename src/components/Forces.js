import React from "react";
import P5Wrapper from "react-p5-wrapper";
import forces from "../sketches/forces";
import "../../src/App.css";

function Forces() {
  return <div className="sketch">{<P5Wrapper sketch={forces} />}</div>;
}

export default Forces;
