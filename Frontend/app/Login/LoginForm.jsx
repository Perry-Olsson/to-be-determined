import React from 'react';
import { KeyboardAvoidingView, StyleSheet, TouchableHighlight, View } from 'react-native';
import { useFormikContext } from 'formik';

//components
import FadeInView from '../components/FadeInView';
import FormikTextInput from '../components/FormikTextInput';
import Logo from '../components/Logo';
import Text from '../components/Text';

//style
import theme from '../components/theme';

const LoginForm = ({ onSubmit }) => {
  const { values } = useFormikContext();
  const submitStyles = [[styles.submit, !inputIsValid(values) && { backgroundColor: '#917082' }]];

  return (
    <FadeInView duration={1000}>
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <View style={ styles.formContainer }>
          <Logo style={styles.logo} />
          <FormikTextInput type='secondary' name='username' placeholder='Username' />
          <FormikTextInput type='secondary' name='password' placeholder='Password' secureTextEntry />
          <TouchableHighlight style={submitStyles} onPress={inputIsValid(values) ? onSubmit : null}>
            <Text fontSize='form'>Sign in</Text>
          </TouchableHighlight>
        </View>
      </KeyboardAvoidingView>
    </FadeInView>
  );
};

const inputIsValid = (values) => values.username && values.password ? true : false;

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
  },
  logo: {
    alignSelf: 'center',
    bottom: 40
  },
  submit: {
    alignItems: 'center',
    borderRadius: 4,
    padding: 10,
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.form,
    backgroundColor: theme.colors.logo
  }
});

export default LoginForm;