import React from "react";
import P5Wrapper from "react-p5-wrapper";
import projectiles from "../sketches/projectiles";
import "../../src/App.css";

function Projectiles() {
  return <div className="sketch">{<P5Wrapper sketch={projectiles} />}</div>;
}

export default Projectiles;
