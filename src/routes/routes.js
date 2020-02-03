import MouseFollowDraw from "../sketches/MouseFollowDraw";
import Ants from "../sketches/Ants";
import BloodSplatter from "../sketches/BloodSplatter";
import GravityWindAndFriction from "../sketches/GravityWindAndFriction";
import MouseAffinity from "../sketches/MouseAffinity";
import ProbabilityFunctions from "../sketches/ProbabilityFunctions";
import Projectiles from "../sketches/Projectiles";
import GravityAndDrag from "../sketches/GravityAndDrag";
import GravityAndAngularMotion from "../sketches/GravityAndAngularMotion";

let routes = [
  {
    path: `/MouseFollowDraw`,
    component: MouseFollowDraw
  },
  {
    path: `/Ants`,
    component: Ants
  },
  {
    path: `/BloodSplatter`,
    component: BloodSplatter
  },
  {
    path: `/GravityWindAndFriction`,
    component: GravityWindAndFriction
  },
  {
    path: `/GravityAndAngularMotion`,
    component: GravityAndAngularMotion
  },
  {
    path: `/GravityAndDrag`,
    component: GravityAndDrag
  },
  {
    path: `/MouseAffinity`,
    component: MouseAffinity
  },
  {
    path: `/ProbabilityFunctions`,
    component: ProbabilityFunctions
  },
  {
    path: `/Projectiles`,
    component: Projectiles
  }
];

routes = routes.sort((a, b) => a.path.localeCompare(b.path));

console.log(routes);

export default routes;
