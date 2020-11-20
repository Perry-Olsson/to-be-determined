import React from 'react';
import { Switch, Route, Redirect } from 'react-router-native';

import Login from '../Login';
import Body from '../SignUp';

const LoginScreen = ({ setUser }) => {
  return (
    <Switch>
      <Route path='/signup'>
        <Body />
      </Route>
      <Route path='/'>
        <Login setUser={setUser} />
      </Route>
      <Redirect to='/' />
    </Switch>
  );
};

export default LoginScreen;