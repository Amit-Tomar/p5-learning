import React from "react";
import "../../src/App.css";
import routes from "../routes/routes";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Init() {
  return (
    <div className="sketch">
      <ul>
        {routes.map((route, index) => (
          <li key={index}>
            <Link to={route.path}>
              {route.path.substr(1, route.path.length) || "/"}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Init;
