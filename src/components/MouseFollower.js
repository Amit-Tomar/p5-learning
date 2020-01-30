import React from "./node_modules/react";
import P5Wrapper from "./node_modules/react-p5-wrapper";
import mouseFollower from "../sketches/MouseAffinity";
import "../../src/App.css";

function MouseFollower() {
  return <div className="sketch">{<P5Wrapper sketch={mouseFollower} />}</div>;
}

export default MouseFollower;
