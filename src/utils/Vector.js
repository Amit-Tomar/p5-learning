/* Supported formats:
Vec2(number,number) eg. Vec2(10,100)
Vec2('number,number')  eg. Vec2('10','100')
Vec2('number','number')  eg. Vec2('10,100')

All above are changed to  eg. Vec2(10,100) internally.

Everything else raises exception. Eg. of invalid formats :

 eg. Vec2('10,100,100')
 eg. Vec2('10')
 eg. Vec2(10)

*/
export function Vec2(x, y = undefined) {
  if (
    (typeof x === "string" || x instanceof String) &&
    typeof y === "undefined"
  ) {
    let splittedString = x.split(",");
    if (splittedString.length === 2) {
      x = splittedString[0];
      y = splittedString[1];
    }
  }

  this.x = +x;
  this.y = +y;

  // Alias to original props in small case, https://stackoverflow.com/questions/18524652/how-to-use-javascript-object-defineproperty
  Object.defineProperty(this, "X", {
    get: function() {
      return x;
    },
    set: function(value) {
      x = value;
    }
  });

  Object.defineProperty(this, "Y", {
    get: function() {
      return y;
    },
    set: function(value) {
      y = value;
    }
  });

  if (isNaN(this.x) || isNaN(this.y)) {
    /*throw new Error(
			"Invalid params to create a vector : . Supported formats: Vec2(number,number) Vec2('number,number') Vec2('number','number')"
		);*/
    console.error(
      `Invalid params to create a vector : Supported formats: Vec2(number,number) Vec2('number,number') Vec2('number','number'), received (${this.x},${this.y})`
    );
  }

  /* Calculates the distance of the point represented by this vector to the point
	represented by the input vector */
  this.distanceFrom = function(inputVector) {
    return Math.sqrt(
      Math.pow(inputVector.x - this.x, 2) + Math.pow(inputVector.y - this.y, 2)
    );
  };

  // Length of vector
  this.length = function() {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  };

  // Limits the Length of vector
  this.limit = function(maxLength) {
    if (this.length() > maxLength) this.setMagnitude(maxLength);
    return this;
  };

  // Rotate vector but theta ( in radians )
  this.rotate = function(theta) {
    return new Vec2(
      Math.cos(theta) * this.x - Math.sin(theta) * this.y,
      Math.sin(theta) * this.x + Math.cos(theta) * this.y
    );
  };

  // Vector substraction
  this.substract = function(inputVector) {
    return new Vec2(this.x - inputVector.x, this.y - inputVector.y);
  };

  // Vector addition
  this.add = function(inputVector) {
    return new Vec2(this.x + inputVector.x, this.y + inputVector.y);
  };

  this.unitVectorAlongThisDirection = function() {
    if (this.length() === 0) return new Vec2(0, 0);
    return new Vec2(this.x / this.length(), this.y / this.length());
  };

  this.normalize = function() {
    return this.unitVectorAlongThisDirection();
  };

  this.setMagnitude = function(magnitude) {
    return this.normalize().mult(magnitude);
  };

  // Mid point on the line formed by this vector and given vector
  this.midpoint = function(inputVector) {
    const x = (this.x + inputVector.x) / 2.0;
    const y = (this.y + inputVector.y) / 2.0;
    return new Vec2(x, y);
  };

  // Vector dot product
  this.dot = function(inputVector) {
    return this.x * inputVector.x + this.y * inputVector.y;
  };

  // Vector scalar product
  this.mult = function(scalar) {
    return new Vec2(this.x * scalar, this.y * scalar);
  };

  /*
		Used only for the purpose of finding the direction of cross product.
		https://github.com/dotnet/coreclr/issues/22673 */
  this.cross = function(inputVector) {
    return this.x * inputVector.y - this.y * inputVector.x;
  };

  // Angle between this and given vector
  this.angleInRadiansWith = function(inputVector) {
    return Math.acos(
      Number(
        (
          this.dot(inputVector) /
          (this.length() * inputVector.length())
        ).toFixed(5)
      )
    );
  };

  // Angle between this and given vector
  this.angleInDegreesWith = function(inputVector) {
    return (this.angleInRadiansWith(inputVector) * 180) / Math.PI;
  };

  /* Referene :  https://math.stackexchange.com/questions/76457/check-if-a-point-is-within-an-ellipse
		Checks if the point represented by this vector end point is inside the given ellipse or not
		*/
  this.liesInsideEllipse = function(center, radiusX, radiusY) {
    return (
      Math.pow(this.x - center.x, 2) / Math.pow(radiusX, 2) +
        Math.pow(this.y - center.y, 2) / Math.pow(radiusY, 2) <=
      1
    );
  };

  /* Return the angle bisecting vector of this and given vector
		Reference : //https://math.stackexchange.com/questions/2285965/how-to-find-the-vector-formula-for-the-bisector-of-given-two-vectors
	*/

  this.angleBisectorWith = function(inputVector) {
    return inputVector.mult(this.length()).add(this.mult(inputVector.length()));
  };

  this.isEqual = function(inputVector) {
    return (
      this.x.toFixed(2) === inputVector.x.toFixed(2) &&
      this.y.toFixed(2) === inputVector.y.toFixed(2)
    );
  };
}

export function Line(point1, point2) {
  this.point1 = point1;
  this.point2 = point2;

  this.slope = function() {
    return (point2.y - point1.y) / (point2.x - point1.x);
  };

  /* Draw a perpendicular from given point onto the line and finds the intersection of this perpendiculr and the line
	Note: This projected point may not lie on the line segment */
  this.getClosestPointPerpendicular = function(point) {
    const AP = point.substract(this.point1);
    const AB = this.point2.substract(this.point1);
    if (AP.length() === 0) {
      return new Vec2(this.point1.x, this.point1.y);
    }
    const projectedLen = AP.length() * Math.cos(AP.angleInRadiansWith(AB));
    return point1.add(
      new Vec2(
        AB.unitVectorAlongThisDirection().x * projectedLen,
        AB.unitVectorAlongThisDirection().y * projectedLen
      )
    );
  };

  // http://mathworld.wolfram.com/Two-PointForm.html
  // https://math.stackexchange.com/questions/324589/detecting-whether-a-point-is-above-or-below-a-slope#targetText=If%20ax1%2Bb,point%20is%20on%20the%20line.
  this.isPointAbove = function(point) {
    return point.y > this.slope() * (point.x - this.point2.x) + this.point2.y;
  };

  // https://www.math-only-math.com/angle-between-two-straight-lines.html
  this.angleBetween = function(line) {
    return Math.atan(
      (line.slope() - this.slope()) / (1 + line.slope() * this.slope())
    );
  };

  /* Reference : https://gamedev.stackexchange.com/questions/44720/line-intersection-from-parametric-equation
	Inputs is assumed to be a line whose intersection is to be checked with given line
	*/
  this.intersectsWith = function(inputLine) {
    // u=(bx(cy-ay) +by(ax-cx))/(dx.by-dy.bx)
    // t=(dx(ay-cy) +dy(cx-ax))/(bx.dy-by.dx)

    const s1 = this.point1;
    const e1 = this.point2;
    const s2 = inputLine.point1;
    const e2 = inputLine.point2;

    const vecA = new Vec2(0, 0);
    const vecB = new Vec2(0, 0);
    const vecC = new Vec2(0, 0);
    const vecD = new Vec2(0, 0);

    vecA.x = s1.x;
    vecA.y = s1.y;

    vecB.x = e1.x - s1.x;
    vecB.y = e1.y - s1.y;

    vecC.x = s2.x;
    vecC.y = s2.y;

    vecD.x = e2.x - s2.x;
    vecD.y = e2.y - s2.y;

    // Parallel lines
    if (vecD.x * vecB.y - vecD.y * vecB.x === 0)
      return { intersects: false, intersectionPoint: null };

    const u =
      (vecB.x * (vecC.y - vecA.y) + vecB.y * (vecA.x - vecC.x)) /
      (vecD.x * vecB.y - vecD.y * vecB.x);

    const t =
      (vecD.x * (vecA.y - vecC.y) + vecD.y * (vecC.x - vecA.x)) /
      (vecB.x * vecD.y - vecB.y * vecD.x);

    if (u >= 0 && u <= 1 && t >= 0 && t <= 1) {
      return {
        intersects: true,
        intersectionPoint: vecC.add(vecD.mult(u))
      };
    } else {
      return { intersects: false, intersectionPoint: undefined };
    }
  };
}

/*
	Takes P1 and P2 coords as input and finds a point along this line at a given distance from P2
	Reference : https://math.stackexchange.com/questions/175896/finding-a-point-along-a-line-a-certain-distance-away-from-another-point
*/
export const getPointAlongLine = (v1, v2, distanceFromP2) => {
  const vectorV1V2 = v2.substract(v1);
  const unitVectorAlongV1V2 = vectorV1V2.unitVectorAlongThisDirection();
  const point = v1.add(
    new Vec2(
      unitVectorAlongV1V2.x * (vectorV1V2.length() + distanceFromP2),
      unitVectorAlongV1V2.y * (vectorV1V2.length() + distanceFromP2)
    )
  );
  return point;
};

/* Reference : https://gamedev.stackexchange.com/questions/44720/line-intersection-from-parametric-equation
Inputs are end points of the line segment whose intersection is required
*/
export const checkVectorIntersection = (s1, e1, s2, e2) => {
  // u=(bx(cy-ay) +by(ax-cx))/(dx.by-dy.bx)
  // t=(dx(ay-cy) +dy(cx-ax))/(bx.dy-by.dx)

  const vecA = new Vec2(0, 0);
  const vecB = new Vec2(0, 0);
  const vecC = new Vec2(0, 0);
  const vecD = new Vec2(0, 0);

  vecA.x = s1.x;
  vecA.y = s1.y;

  vecB.x = e1.x - s1.x;
  vecB.y = e1.y - s1.y;

  vecC.x = s2.x;
  vecC.y = s2.y;

  vecD.x = e2.x - s2.x;
  vecD.y = e2.y - s2.y;

  // Parallel lines
  if (vecD.x * vecB.y - vecD.y * vecB.x === 0) return false;

  const u =
    (vecB.x * (vecC.y - vecA.y) + vecB.y * (vecA.x - vecC.x)) /
    (vecD.x * vecB.y - vecD.y * vecB.x);

  const t =
    (vecD.x * (vecA.y - vecC.y) + vecD.y * (vecC.x - vecA.x)) /
    (vecB.x * vecD.y - vecB.y * vecD.x);

  if (u >= 0 && u <= 1 && t >= 0 && t <= 1) {
    return true;
  }

  return false;
};
