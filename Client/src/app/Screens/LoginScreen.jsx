import React, { useState } from "react";
import { NativeRouter, Switch, Route, Redirect } from "react-router-native";

import { Login } from "../Login";
import Register from "../Register";

export const LoginScreen = () => {
  const [fadeIn, setFadeIn] = useState(true);

  return (
    <NativeRouter>
      <Switch>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/">
          <Login fadeIn={fadeIn} setFadeIn={setFadeIn} />
        </Route>
        <Redirect to="/" />
      </Switch>
    </NativeRouter>
  );
};
