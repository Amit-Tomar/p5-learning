import routes from "../routes/routes";
import { Link } from "react-router-dom";
import React from "react";

function Home() {
  return (
    <ul>
      {routes.map((route, index) => (
        <li key={index}>
          <Link to={`component${route.path}`}>
            {route.path.substr(1, route.path.length) || "/"}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Home;
