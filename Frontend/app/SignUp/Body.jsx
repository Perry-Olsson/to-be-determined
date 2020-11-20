import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Formik } from 'formik';

import SignUpForm from './SignUpForm';

const Body = ({ onSubmit }) => {
  const initialValues = {
    username: '',
    password: '',
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => (
        <View style={styles.container}>
          <SignUpForm onSubmit={handleSubmit} />
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default Body;