import React from "react";
import { Route, Switch } from "react-router-dom";
import Dishes from "./pages/Dishes";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { PageNotFound } from "./styles";

const NotFound = () => {
  return (
    <PageNotFound>
      <h1>Página não encontrada</h1>
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
