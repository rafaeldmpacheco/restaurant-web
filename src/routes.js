import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dishes from "./pages/Dishes";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

const PageNotFound = () => {
  return (
    <div>
      <h1>Página não encontrada</h1>
    </div>
  );
};

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/dishes" component={Dishes} isPrivate />
        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}
