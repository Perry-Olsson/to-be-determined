import React, { useState } from "react";
import { NativeRouter, Switch, Route, Redirect } from "react-router-native";

import Login from "../Login";
import SignUp from "../SignUp";

const LoginScreen = () => {
  const [fadeIn, setFadeIn] = useState(true);

  return (
    <NativeRouter>
      <Switch>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/">
          <Login fadeIn={fadeIn} setFadeIn={setFadeIn} />
        </Route>
        <Redirect to="/" />
      </Switch>
    </NativeRouter>
  );
};

export default LoginScreen;
