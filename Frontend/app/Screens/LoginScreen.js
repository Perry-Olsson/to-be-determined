import React from 'react';
import { Formik } from 'formik';

//components
import LoginForm from '../components/LoginForm';

const initialValues = {
  username: '',
  password: '',
};

const LoginScreen = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => <LoginForm onSubmit={handleSubmit} /> }
    </Formik>
  );
};

export default LoginScreen;