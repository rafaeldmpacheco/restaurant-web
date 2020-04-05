import React from "react";
import { FiLogIn } from "react-icons/fi";
import { Link, Route, Switch } from "react-router-dom";
import Dishes from "./pages/Dishes";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { PageNotFound } from "./styles";

const NotFound = () => {
  return (
    <PageNotFound>
      <h1>Página não encontrada</h1>

      <Link className="back-link" to="/">
        <FiLogIn size={26} color="#a0131b" />
        Go to Login
      </Link>
    </PageNotFound>
  );
};

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/dishes" component={Dishes} />
      <Route component={NotFound} />
    </Switch>
  );
}
