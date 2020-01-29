// https://github.com/processing/p5.js/issues/1339
/// <reference path="../../../p5.d/p5.d.ts" />
import Walker from "./Walker";
import { Vec2 } from "../../utils/Vector";

import React from "react";
import P5Wrapper from "react-p5-wrapper";

function projectiles(P5) {
  const tick = 1;
  let walker1 = null,
    walker2 = null,
    walker3 = null;

  P5.setup = () => {
    P5.createCanvas(P5.windowWidth, P5.windowHeight);
    P5.background("white");
    P5.noStroke();

    walker1 = new Walker();
    walker1.acceleration = walker1.acceleration.setMagnitude(0.1);
    walker1.velocity = walker1.velocity.setMagnitude(5);

    walker2 = new Walker();
    walker2.acceleration = new Vec2(1, 0);
    walker2.acceleration = walker2.acceleration.setMagnitude(0.05);
    walker2.velocity = walker2.velocity.setMagnitude(5);

    walker3 = new Walker();
    walker3.position = new Vec2(100, P5.windowHeight * 0.9);
    walker3.velocity = new Vec2(1, -1);
    walker3.acceleration = walker3.acceleration.setMagnitude(0.1);
    walker3.velocity = walker3.velocity.setMagnitude(10);
  };

  P5.draw = () => {
    P5.fill("red");

    walker1.walk(P5, tick);
    walker1.render(P5);

    P5.fill("green");

    walker2.walk(P5, tick);
    walker2.render(P5);

    P5.fill("blue");

    walker3.walk(P5, tick);
    walker3.render(P5);
  };
}

export default function Projectiles() {
  return <div className="sketch">{<P5Wrapper sketch={projectiles} />}</div>;
}
