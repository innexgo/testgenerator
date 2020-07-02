import * as React from "react";
import { connect} from "react-redux";
import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Logout from "../pages/Logout";

import LoggedInRoute from "./LoggedInRoute";
import LoggedOutRoute from "./LoggedOutRoute";

const Pages = () => {
  return (
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <LoggedOutRoute path="/login" exact={true} component={Login} />
      <LoggedOutRoute path="/register" exact={true} component={Register} />

      <LoggedInRoute path="/dashboard" exact={true} component={Dashboard} />
      <LoggedInRoute path="/logout" exact={true} component={Logout} />
    </Switch>
  );
};

export default Pages;

