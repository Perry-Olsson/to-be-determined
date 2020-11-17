import React from 'react';
import { TouchableWithoutFeedback, View, Keyboard } from 'react-native';
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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View styles={{ flex: 1 }}>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {({ handleSubmit }) => <LoginForm onSubmit={handleSubmit} /> }
        </Formik>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;