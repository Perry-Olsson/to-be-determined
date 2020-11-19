import React from 'react';
import { KeyboardAvoidingView, View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
//components
import FadeInView from '../components/FadeInView';
import LoginForm from './LoginForm';

const initialValues = {
  username: '',
  password: '',
};

const Login = ({ setUser }) => {
  const onSubmit = ({ username, password }) => {
    if (username === 'testUser' && password === 'password')
      setUser({ username: 'testUser' });
    else
      alert('invalid username or password');
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => (
        <FadeInView duration={1000}>
          <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <View style={ styles.formContainer }>
              <LoginForm onSubmit={handleSubmit} />
            </View>
          </KeyboardAvoidingView>
          {/**<Footer>**/ }
        </FadeInView>
      ) }
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    width: '100%',
    padding: 15,
    justifyContent: 'center',
  }
});

export default Login;