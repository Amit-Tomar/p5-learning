import { Vec2 } from "../../utils/Vector";

export default class {
  constructor(position = new Vec2(100, 100), mass = 15) {
    this.mass = mass;
    this.position = position;
    this.velocity = new Vec2(0, 0);
    this.acceleration = new Vec2(0, 0);
    this.radius = mass;
    this.angularDisplacement = 0;
    this.angularVelocity = 0.01;
    this.angularAcceleration = 0.01;
  }

  applyForce = function(force) {
    // a = F / m
    this.acceleration = this.acceleration.add(force.mult(1 / this.mass));
  };

  update = function(P5, tick = 1) {
    // V = u + (a.t)
    // S = u.t + 1/2 . a . (t*t)

    this.position = this.position.add(
      this.velocity.mult(tick).add(this.acceleration.mult(tick * tick * 0.5))
    );
    this.velocity = this.velocity.add(this.acceleration.mult(tick));

    // Reset acceleration to accumilate forces
    this.acceleration = new Vec2(0, 0);

    this.angularDisplacement += this.angularVelocity;
    this.angularVelocity += this.angularAcceleration;
    this.angularVelocity = P5.constrain(this.angularVelocity, 0, 0.1);
  };

  render = function(P5) {
    P5.push();
    P5.translate(this.position.x, this.position.y);
    P5.rotate(this.angularDisplacement);
    P5.rectMode(P5.CENTER);
    const drawingSize = P5.constrain(this.radius, 1, 50);
    P5.rect(0, 0, drawingSize * 0.8, drawingSize * 0.8);
    P5.ellipse(0, 0, drawingSize);
    P5.pop();
  };

  edges = function(P5) {
    // Boundary Check
    // if (this.position.y > P5.height || this.position.y < 0) {
    //   this.velocity.y = -this.velocity.y;
    // }
    // if (this.position.x > P5.width || this.position.x < 0) {
    //   this.velocity.x = -this.velocity.x;
    // }
  };
}
