import { Vec2, Line } from "../../utils/Vector";

export default class {
  constructor(position = new Vec2(100, 100), mass = 15) {
    this.mass = mass;
    this.position = position;
    this.velocity = new Vec2(0, 0);
    this.acceleration = new Vec2(0, 0);
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
  };

  render = function(P5) {
    P5.ellipse(this.position.x, this.position.y, 10);
    P5.stroke("red");
    P5.push();
    P5.translate(this.position.x, this.position.y);
    const arrow = new Vec2(this.velocity.x * 20, this.velocity.y * 20);
    P5.line(0, 0, arrow.x, arrow.y);
    P5.pop();

    P5.push();
    P5.translate(this.position.x + arrow.x, this.position.y + arrow.y);
    let aor = new Line(Vec2.nullVector(), this.velocity);
    aor = aor.slope();
    P5.rotate(aor);
    const sideLength = 10;
    P5.line(0, sideLength / 2, sideLength * Math.cos(Math.PI / 6), 0);
    P5.line(0, -sideLength / 2, sideLength * Math.cos(Math.PI / 6), 0);

    P5.line(0, sideLength / 2, 0, -sideLength * Math.cos(sideLength / 2));
    P5.pop();
  };

  edges = function(P5) {
    // Boundary Check
    if (this.position.y > P5.height || this.position.y < 0) {
      this.velocity.y = -this.velocity.y;
    }

    if (this.position.x > P5.width || this.position.x < 0) {
      this.velocity.x = -this.velocity.x;
    }
  };
}
