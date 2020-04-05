import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";

import Dishes from "./pages/Dishes";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

const PageNotFound = () => {
  return (
    <div className="align-center">
      <h1>Página não encontrada</h1>
    </div>
  );
};
export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/dishes" component={Dishes} isPrivate />
      <Route component={PageNotFound} />
    </Switch>
  );
}
