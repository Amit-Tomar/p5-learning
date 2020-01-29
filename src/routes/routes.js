import MouseFollowDraw from "../sketches/MouseFollowDraw";
import Ants from "../sketches/Ants";
import BloodSplatter from "../sketches/BloodSplatter";
import GravityAndWind from "../sketches/GravityAndWind";
import MouseAffinity from "../sketches/MouseAffinity";
import ProbabilityFunctions from "../sketches/ProbabilityFunctions";
import Projectiles from "../sketches/Projectiles";

const routes = [
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
    path: `/GravityAndWind`,
    component: GravityAndWind
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

export default routes;
