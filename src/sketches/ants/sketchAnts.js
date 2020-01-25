// https://github.com/processing/p5.js/issues/1339
/// <reference path="../../../p5.d/p5.d.ts" />

const maxAnts = 10;
let universeTime = 1;
let ants = [];

export default function(P5) {
  P5.state = {};

  P5.setup = () => {
    P5.createCanvas(P5.displayWidth, P5.displayHeight);

    for (let index = 0; index < 10; index++) {
      ants.push(new Ant(P5.random(0, P5.width), P5.random(0, P5.height)));
    }

    console.log("Sketch has been initialized");
  };

  P5.draw = () => {
    P5.background(51);
    for (let index = 0; index < maxAnts; index++) {
      const ant = ants[index];

      ant.acceleration = P5.createVector(
        P5.mouseX || P5.width / 2,
        P5.mouseY || P5.height / 2
      )
        .sub(ant.pos)
        .setMag(0.02);

      // put drawing code here
      ant.pos = ant.pos.add(
        ant.velocity
          .mult(ant.timeTick)
          .add(ant.acceleration.mult(ant.timeTick * ant.timeTick))
      );
      ant.draw();

      ant.velocity = ant.velocity.add(ant.acceleration.mult(ant.timeTick));
    }

    universeTime = universeTime + 0.5;
  };

  function Ant(posX, posY) {
    this.pos = P5.createVector(posX, posY);
    this.velocity = P5.createVector(P5.width, P5.height).setMag(0.1);
    this.acceleration = P5.createVector(0, -P5.height).setMag(0.001);
    this.timeTick = 0.995;

    this.bodyLength = 35;
    this.bodyWidth = 15;
    this.headWidth = 10;
    this.legLength = 15;

    this.draw = function() {
      const dampner = 0.7;
      P5.fill("teal");
      P5.stroke("white");
      P5.rectMode(P5.CENTER);
      P5.ellipseMode(P5.CENTER);
      P5.push();
      P5.translate(this.pos.x, this.pos.y);
      P5.rotate(this.velocity.heading());

      // Leg Forward 1
      P5.line(
        this.bodyLength / 4,
        0,
        this.bodyLength / 4 + P5.cos(universeTime),
        this.legLength
      );

      // Leg Forward 2
      P5.line(
        this.bodyLength / 4,
        0,
        this.bodyLength / 4 + P5.cos(universeTime),
        -this.legLength
      );

      // Leg Backward 1
      P5.line(
        -this.bodyLength / 4,
        0,
        -this.bodyLength / 4 - P5.cos(universeTime),
        this.legLength
      );

      // Leg Backward 2
      P5.line(
        -this.bodyLength / 4,
        0,
        -this.bodyLength / 4 + P5.cos(universeTime),
        -this.legLength
      );

      // Tentacle 1
      P5.line(
        this.bodyLength / 2 + this.headWidth / 2,
        0,
        this.bodyLength / 2 + this.headWidth / 2 + 15,
        this.legLength
      );

      // Tentacle 2
      P5.line(
        this.bodyLength / 2 + this.headWidth / 2,
        0,
        this.bodyLength / 2 + this.headWidth / 2 + 15,
        -this.legLength
      );

      // Body
      P5.rect(0, 0, this.bodyLength, this.bodyWidth, 5);

      // Head
      P5.ellipse(
        this.bodyLength / 2 + this.headWidth / 2,
        0,
        this.headWidth,
        this.headWidth
      );

      P5.pop();
      P5.fill("teal");
      P5.rect(P5.mouseX, P5.mouseY - 10, 100, 25);
      P5.textSize(15);
      P5.fill("white");
      P5.text("Sugar", P5.mouseX - 20, P5.mouseY - 5);
    };
  }
}
