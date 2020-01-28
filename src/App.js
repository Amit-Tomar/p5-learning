import React, { Suspense, lazy } from "react";
import Fab from "@material-ui/core/Fab";
import HomeIcon from "@material-ui/icons/Home";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import "./App.css";
import routes from "./routes/routes";

function App() {
  return (
    <Suspense fallback={<div>Loading..</div>}>
      <Router>
        <Link to="/">Home</Link>
        <Switch>
          {routes.map(route => (
            <Route
              key={route.path}
              exact
              path={route.path}
              component={route.component}
            />
          ))}
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
