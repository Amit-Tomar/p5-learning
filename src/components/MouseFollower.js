import React from "react";
import P5Wrapper from "react-p5-wrapper";
import mouseFollower from "../sketches/mouseFollower";
import "../../src/App.css";

function MouseFollower() {
  return <div className="sketch">{<P5Wrapper sketch={mouseFollower} />}</div>;
}

export default MouseFollower;
