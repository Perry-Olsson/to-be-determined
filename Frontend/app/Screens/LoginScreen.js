import React from 'react';
import { Formik } from 'formik';

//components
import LoginForm from '../Login/LoginForm';

const initialValues = {
  username: '',
  password: '',
};

const LoginScreen = () => {
  const onSubmit = ({ username, password }) => {
    if (username === 'testUser' && password === 'password')
      alert('login successfull');
    else
      alert('login not successfull');
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => <LoginForm onSubmit={handleSubmit} /> }
    </Formik>
  );
};

export default LoginScreen;