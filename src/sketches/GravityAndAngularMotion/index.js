// https://github.com/processing/p5.js/issues/1339
/// <reference path="../../../p5.d/p5.d.ts" />
import Planet from "./Planet";
import { Vec2 } from "../../utils/Vector";
import React from "react";
import P5Wrapper from "react-p5-wrapper";

function gravityAndWind(P5) {
  const tick = 1;
  let planets = Array(10);
  let sun = null;

  P5.setup = () => {
    P5.createCanvas(P5.windowWidth, P5.windowHeight);
    P5.background("white");
    P5.noStroke();

    for (let index = 0; index < planets.length; index++) {
      planets[index] = new Planet(
        new Vec2(P5.random(10, P5.width), P5.random(10, P5.height / 4)),
        P5.random(5, 40)
      );
      planets[index].velocity = new Vec2(P5.random(-1, 1), P5.random(-1, 1));
    }

    sun = new Planet(new Vec2(P5.width / 2, P5.height / 2), 100);
  };

  P5.draw = () => {
    P5.background("white");

    // G * m1 * m2 / r*r

    P5.fill("red");
    planets.forEach(planet => {
      const G = 0.1;
      const distanceFromSun = P5.constrain(
        planet.position.distanceFrom(sun.position),
        5,
        10
      );
      const gravityMagnitude =
        (G * planet.mass * sun.mass) / Math.pow(distanceFromSun, 2);

      const gravity = sun.position
        .substract(planet.position)
        .normalize()
        .setMagnitude(gravityMagnitude);

      planet.applyForce(gravity);
      planet.update(P5, tick);
      planet.edges(P5);
      planet.render(P5);
    });
    P5.fill("orange");
    sun.render(P5);
  };
}

export default function GravityAndWind() {
  return <div className="sketch">{<P5Wrapper sketch={gravityAndWind} />}</div>;
}
