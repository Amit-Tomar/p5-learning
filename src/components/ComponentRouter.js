import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

import routes from "../routes/routes";

function ComponentRouter({ match }) {
  return (
    <Suspense fallback={<div>Loading..</div>}>
      {/* <Link style={{ position: "absolute" }} to="/P5">
        Home
      </Link> */}
      {/* <Button variant="outlined" color="primary">
        Home
      </Button> */}
      <Switch>
        {routes.map(route => (
          <Route
            exact
            key={route.path}
            path={`${match.url}${route.path}`}
            component={route.component}
          />
        ))}
      </Switch>
    </Suspense>
  );
}

export default ComponentRouter;
