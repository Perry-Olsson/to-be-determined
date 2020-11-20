import React from 'react';
import { KeyboardAvoidingView, StyleSheet } from 'react-native';
import { Formik } from 'formik';

import LoginForm from './LoginForm';

const initialValues = {
  username: '',
  password: '',
};

const Body = ({ onSubmit }) => (
  <Formik initialValues={initialValues} onSubmit={onSubmit}>
    {({ handleSubmit }) => (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <LoginForm onSubmit={handleSubmit} />
      </KeyboardAvoidingView>
    )}
  </Formik>
);

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Body;