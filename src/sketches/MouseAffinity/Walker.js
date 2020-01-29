import { Vec2 } from "../../utils/Vector";

export default class {
  constructor(position = new Vec2(100, 100)) {
    this.mass = 5;
    this.position = position;
    this.velocity = new Vec2(1, 0);
    this.acceleration = new Vec2(0, 1);
  }

  walk = function(P5, tick = 1) {
    // V = u + (a.t)
    // S = u.t + 1/2 . a . (t*t)

    this.position = this.position.add(
      this.velocity.mult(tick).add(this.acceleration.mult(tick * tick * 0.5))
    );
    this.velocity = this.velocity.add(this.acceleration.mult(tick));

    this.velocity.limit(5);
  };

  render = function(P5) {
    P5.ellipse(this.position.x, this.position.y, this.mass);
  };
}
