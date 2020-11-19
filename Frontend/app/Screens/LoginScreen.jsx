import React from 'react';


//components
import Login from '../login/Login';
import CreateAccount from '../login/CreateAccount';



const LoginScreen = ({ setUser }) => {
  return (
    <Login setUser={setUser} />
  );
};

export default LoginScreen;