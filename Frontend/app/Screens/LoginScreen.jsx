import React from 'react';
import { Formik } from 'formik';

//components
import LoginForm from '../Login/LoginForm';

const initialValues = {
  username: '',
  password: '',
};

const LoginScreen = ({ setUser }) => {
  const onSubmit = ({ username, password }) => {
    if (username === 'testUser' && password === 'password')
      setUser({ username: 'testUser' });
    else
      alert('invalid username or password');
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => <LoginForm onSubmit={handleSubmit} /> }
    </Formik>
  );
};

export default LoginScreen;