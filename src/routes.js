import React from "react";
import { FiLogIn } from "react-icons/fi";
import { Link, Redirect, Route, Switch } from "react-router-dom";
import { PageNotFound } from "./styles";
import Dishes from "./pages/Dishes";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { store } from "./store";

const NotFound = () => {
  return (
    <PageNotFound>
      <h1>Page not found!</h1>
      <Link className="back-link" to="/">
        <FiLogIn size={26} color="#a0131b" />
        Go to Login
      </Link>
    </PageNotFound>
  );
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { authenticated } = store.getState().auth;
  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ path: "/" }} />
        )
      }
    />
  );
};

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/sign-up" component={SignUp} />
      <PrivateRoute path="/dishes" component={Dishes} />
      <Route component={NotFound} />
    </Switch>
  );
}
