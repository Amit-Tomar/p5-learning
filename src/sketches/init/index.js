// https://github.com/processing/p5.js/issues/1339
/// <reference path="../../../p5.d/p5.d.ts" />

export default function(P5) {
  P5.setup = () => {
    P5.createCanvas(P5.displayWidth, P5.displayHeight);
    P5.background("white");
    console.log("Sketch has been initialized");
  };

  P5.draw = () => {
    P5.fill(0, 0, 0, 20);
    P5.noStroke();
    P5.ellipse(P5.mouseX, P5.mouseY, 10);
  };
}
