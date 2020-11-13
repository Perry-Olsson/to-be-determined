import React from 'react';
import { View, StyleSheet, TouchableHighlight } from 'react-native';

//components
import Text from './Text';
import FormikTextInput from './FormikTextInput';
import Logo from '../components/Logo';

//style
import theme from '../components/theme';

const LoginForm = ({ onSubmit }) => {
  return (
    <>
      <View style={styles.formContainer}>
        <Logo style={styles.logo} />
        <FormikTextInput type='secondary' name='username' placeholder='Username' />
        <FormikTextInput type='secondary' name='password' placeholder='Password' secureTextEntry />
        <TouchableHighlight onPress={onSubmit}>
          <Text style={styles.submit}>Sign in</Text>
        </TouchableHighlight>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    width: '100%',
    padding: 15,
    justifyContent: 'center',
  },
  logo: {
    alignSelf: 'center',
    bottom: 40
  },
  submit: {
    borderRadius: 4,
    padding: 10,
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.button,
    textAlign: 'center',
    backgroundColor: theme.colors.logo
  }
});

export default LoginForm;