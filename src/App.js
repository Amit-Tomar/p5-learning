import React, { Suspense, lazy } from "react";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./components/Home";
import ComponentRouter from "./components/ComponentRouter";

import "./App.css";

function App() {
  return (
    <Suspense fallback={<div>Loading..</div>}>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route exact path={"/P5"} component={Home} />
          <Route path={"/component/"} component={ComponentRouter} />
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
