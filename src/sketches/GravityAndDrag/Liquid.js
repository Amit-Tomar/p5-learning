import { Vec2 } from "../../utils/Vector";

export default class Liquid {
  constructor(leftTop, bottomRight, dragCoeficient) {
    this.leftTop = leftTop;
    this.bottomRight = bottomRight;
    this.dragCoeficient = dragCoeficient;
  }

  render = function(P5) {
    P5.rect(
      this.leftTop.x,
      this.leftTop.y,
      this.bottomRight.x,
      this.bottomRight.y
    );
  };

  contains = function(walker) {
    return walker.position.y + walker.radius / 2 > this.leftTop.y;
  };

  dragForce = function(walker) {
    // - CoffDrag * ||v|| * ||v|| * v
    if (this.contains(walker))
      return walker.velocity.mult(
        Math.pow(walker.velocity.length(), 2) *
          this.dragCoeficient *
          -1 *
          walker.mass
      );
    else return new Vec2(0, 0);
  };
}
