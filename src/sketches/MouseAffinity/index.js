// https://github.com/processing/p5.js/issues/1339
/// <reference path="../../../p5.d/p5.d.ts" />
import Walker from "./Walker";
import { Vec2 } from "../../utils/Vector";
import React from "react";
import P5Wrapper from "react-p5-wrapper";

function mouseAffinity(P5) {
  let walker1 = null;

  P5.setup = () => {
    P5.createCanvas(P5.windowWidth, P5.windowHeight);
    P5.background("white");
    P5.noStroke();

    walker1 = new Walker(new Vec2(P5.width / 2, P5.height / 2));
    walker1.acceleration = walker1.acceleration.setMagnitude(0);
    walker1.velocity = walker1.velocity.setMagnitude(0);
  };

  P5.draw = () => {
    P5.fill("red");

    walker1.acceleration = new Vec2(P5.mouseX, P5.mouseY)
      .substract(walker1.position)
      .setMagnitude(0.1);
    walker1.walk(P5);
    walker1.render(P5);
  };
}

export default function MouseAffinity() {
  return <div className="sketch">{<P5Wrapper sketch={mouseAffinity} />}</div>;
}
