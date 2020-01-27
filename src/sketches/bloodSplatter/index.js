import { Vec2 } from "../../utils/Vector";

// https://github.com/processing/p5.js/issues/1339
/// <reference path="../../../p5.d/p5.d.ts" />

export default function(P5) {
  P5.setup = () => {
    P5.createCanvas(P5.windowWidth, P5.windowHeight);
    P5.background("white");
    P5.noStroke();
  };

  const drawBloodPool = bloodCenter => {
    P5.frameRate = 2;
    P5.translate(P5.width / 2, P5.height / 2);
    // Gaussian Distribution
    P5.noStroke();
    P5.fill(255, 0, 0, 80);

    for (let index = 0; index < 1000; index++) {
      let spotRadii = P5.randomGaussian(5, 5);
      const xPosRandom = P5.randomGaussian(0, 25);
      const yPosRandom = P5.randomGaussian(0, 10);
      spotRadii = (1 - Math.abs(xPosRandom) / 50) * 10;
      P5.ellipse(
        bloodCenter.x + xPosRandom,
        bloodCenter.y + yPosRandom,
        spotRadii,
        spotRadii
      );
    }
  };

  P5.draw = () => {};

  P5.mouseClicked = () => {
    const clickPosFromScreenCenter = new Vec2(P5.mouseX, P5.mouseY).substract(
      new Vec2(P5.width / 2, P5.height / 2)
    );
    console.log(clickPosFromScreenCenter);
    drawBloodPool(clickPosFromScreenCenter);
  };
}
