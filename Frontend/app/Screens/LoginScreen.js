import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
//components
import LoginForm from '../Login/LoginForm';

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required()
});

const LoginScreen = () => {
  const onSubmit = ({ username, password }) => {
    if (username === 'testUser' && password === 'password')
      alert('login successfull');
    else
      alert('login not successfull');
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => <LoginForm onSubmit={handleSubmit} /> }
    </Formik>
  );
};

export default LoginScreen;