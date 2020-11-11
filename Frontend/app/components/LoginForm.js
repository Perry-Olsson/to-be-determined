import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';

//components
import Text from './Text';
import FormikTextInput from './FormikTextInput';
import Logo from '../components/Logo';

//style
import theme from '../components/theme';

const LoginForm = ({ onSubmit }) => {
  return (
    <>
      <Logo style={styles.logo} />
      <View style={styles.formContainer}>
        <FormikTextInput name='username' placeholder='Username' />
        <FormikTextInput name='password' placeholder='Password' secureTextEntry />
      </View>
    </>
  );
};

const formHeight = Dimensions.get('window').height * 0.4;

const styles = StyleSheet.create({
  formContainer: {
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: theme.colors.logo,
    borderRadius: 5,
    height: formHeight,
    width: 300,
  },
  logo: {
    position: 'absolute',
    top: Constants.statusBarHeight,
    marginTop: 50,
  }
});

export default LoginForm;