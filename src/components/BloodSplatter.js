import React from "react";
import P5Wrapper from "react-p5-wrapper";
import bloodSplatter from "../sketches/bloodSplatter";
import "../../src/App.css";

function BloodSplatter() {
  return <div className="sketch">{<P5Wrapper sketch={bloodSplatter} />}</div>;
}

export default BloodSplatter;
