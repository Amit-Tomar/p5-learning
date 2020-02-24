// https://github.com/processing/p5.js/issues/1339
/// <reference path="../../../p5.d/p5.d.ts" />
import Walker from "./Walker";
import { Vec2 } from "../../utils/Vector";
import React from "react";
import P5Wrapper from "react-p5-wrapper";

function steering(P5) {
  const tick = 1;
  let walkers = Array(5);

  P5.setup = () => {
    P5.createCanvas(P5.windowWidth, P5.windowHeight);
    P5.background("white");
    P5.noStroke();

    for (let index = 0; index < walkers.length; index++) {
      walkers[index] = new Walker(
        new Vec2(P5.random(10, P5.width), P5.random(10, P5.height)),
        P5.random(10, 50)
      );
      walkers[index].velocity = Vec2.nullVector();
    }
  };

  P5.draw = () => {
    P5.background("white");
    P5.fill("red");

    walkers.forEach(walker => {
      const mousePos = new Vec2(P5.mouseX, P5.mouseY);
      let desiredVelocity = mousePos.substract(walker.position);
      const maxVelocity = 5;
      const maxForce = 5;

      const distanceFromDestination = walker.position.distanceFrom(mousePos);

      if (distanceFromDestination < 100) {
        desiredVelocity = desiredVelocity.setMagnitude(
          P5.map(distanceFromDestination, 0, 100, 0, maxVelocity)
        );
      } else {
        desiredVelocity = desiredVelocity
          .setMagnitude(distanceFromDestination)
          .limit(maxVelocity);
      }

      const desiredForce = desiredVelocity
        .substract(walker.velocity)
        .limit(maxForce);
      walker.applyForce(desiredForce);
      walker.update(P5, tick);
      //   walker.edges(P5);
      walker.render(P5);
    });
  };
}

export default function Steering() {
  return <div className="sketch">{<P5Wrapper sketch={steering} />}</div>;
}
