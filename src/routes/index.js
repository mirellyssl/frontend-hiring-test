import React from "react";
import { BrowserRouter, Route, Switch, Redirect, withRouter } from "react-router-dom";
import Login from '../pages/Login/Login';
import Global from "../style";
import Home from "../pages/Home/Home";
import  IsAuthenticated  from "../services/VerifyToken";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      IsAuthenticated() ? (
        <Component {...props} />
      ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
  <Global />
    <Switch>
      <Route exact path="/" component={Login} />
      <PrivateRoute path="/home" component={Home} />
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;