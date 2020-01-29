// https://github.com/processing/p5.js/issues/1339
/// <reference path="../../../p5.d/p5.d.ts" />
import Walker from "./Walker";
import { Vec2 } from "../../utils/Vector";
import React from "react";
import P5Wrapper from "react-p5-wrapper";

function gravityAndWind(P5) {
  const tick = 1;
  let walkers = Array(10);
  let ballOnFloor = null;

  P5.setup = () => {
    P5.createCanvas(P5.windowWidth, P5.windowHeight);
    P5.background("white");
    P5.noStroke();

    for (let index = 0; index < walkers.length; index++) {
      walkers[index] = new Walker(
        new Vec2(P5.random(10, P5.width), P5.random(10, P5.height)),
        P5.random(10, 50)
      );
    }

    ballOnFloor = new Walker(new Vec2(P5.width / 2, P5.height - 15), 30);
  };

  P5.draw = () => {
    P5.background("white");
    P5.fill("red");
    const gravity = new Vec2(0, 2);
    const wind = new Vec2(2.5, 0);

    const frictionCoefficient = 2;
    const Normal = 1;
    let friction = frictionCoefficient * Normal;
    friction = ballOnFloor.velocity.setMagnitude(-friction);

    console.log(friction);

    walkers.forEach(walker => {
      walker.applyForce(gravity);
      walker.applyForce(wind);
      walker.update(P5, tick);
      walker.edges(P5);
      walker.render(P5);
    });

    P5.fill("green");
    ballOnFloor.applyForce(wind);
    ballOnFloor.applyForce(friction);
    ballOnFloor.update(P5, tick);
    ballOnFloor.edges(P5);
    ballOnFloor.render(P5);
  };
}

export default function GravityAndWind() {
  return <div className="sketch">{<P5Wrapper sketch={gravityAndWind} />}</div>;
}
