// https://github.com/processing/p5.js/issues/1339
/// <reference path="../../../p5.d/p5.d.ts" />

export default function(P5) {
  const randomVarValues = Array(P5.windowWidth).fill(0);
  //   for (let index = 0; index < P5.width; index++) {
  //     randomVarValues[index] = 0;
  //   }

  P5.setup = () => {
    P5.createCanvas(P5.windowWidth, P5.windowHeight);
    P5.background("white");
    P5.noStroke();
  };

  P5.draw = () => {
    P5.translate(P5.width / 2, P5.height / 2);

    // Draw Axis
    P5.stroke(255, 0, 0, 255);
    P5.line(0, 0, 0, -P5.height / 2);
    P5.line(0, 0, P5.width / 2, 0);

    // Uniform Distribution
    P5.stroke(0, 0, 0, 255);
    let xIndex = parseInt(P5.random(-P5.width / 2, P5.width / 2));
    let indexInStorage = xIndex + parseInt(P5.width / 2);
    randomVarValues[indexInStorage] = randomVarValues[indexInStorage] - 20;
    P5.line(xIndex, 0, xIndex, randomVarValues[indexInStorage] - 20);

    P5.noStroke();
    P5.fill(0, 0, 0, 20);
    P5.ellipse(xIndex, -P5.height / 2 + 40, 20);

    // Gaussian Distribution
    P5.translate(0, P5.height / 2);
    P5.stroke(255, 0, 0, 255);
    xIndex = parseInt(P5.randomGaussian(0, P5.width / 10));
    indexInStorage = xIndex + parseInt(P5.width / 2);
    randomVarValues[indexInStorage] = randomVarValues[indexInStorage] - 20;
    P5.line(xIndex, 0, xIndex, randomVarValues[indexInStorage] - 20);

    P5.noStroke();
    P5.fill(255, 0, 0, 20);
    P5.ellipse(xIndex, -P5.height / 2 + 40, 20);
  };
}
