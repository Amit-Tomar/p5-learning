import Home from "../components/Home";
import Init from "../components/Init";
import Ants from "../components/Ants";
import BloodSplatter from "../components/BloodSplatter";
import Forces from "../components/Forces";
import MouseFollower from "../components/MouseFollower";
import ProbabilityFunctions from "../components/ProbabilityFunctions";
import Projectiles from "../components/Projectiles";

const routes = [
  {
    path: `/`,
    component: Home
  },
  {
    path: `/${Init.name}`,
    component: Init
  },
  {
    path: `/${Ants.name}`,
    component: Ants
  },
  {
    path: `/${BloodSplatter.name}`,
    component: BloodSplatter
  },
  {
    path: `/${Forces.name}`,
    component: Forces
  },
  {
    path: `/${MouseFollower.name}`,
    component: MouseFollower
  },
  {
    path: `/${ProbabilityFunctions.name}`,
    component: ProbabilityFunctions
  },
  {
    path: `/${Projectiles.name}`,
    component: Projectiles
  }
];

export default routes;
