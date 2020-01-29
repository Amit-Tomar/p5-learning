import React, { Suspense, lazy } from "react";
import Fab from "@material-ui/core/Fab";
import HomeIcon from "@material-ui/icons/Home";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./components/Home";
import ComponentRouter from "./components/ComponentRouter";

import "./App.css";
import routes from "./routes/routes";

function App() {
  return (
    <Suspense fallback={<div>Loading..</div>}>
      <Router>
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
