import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';

import DismissKeyboard from '../components/DismissKeyboard';
import Body from './Body';
import Text from '../components/Text';
import Footer from '../components/Footer';

import theme from '../components/theme';

const SignUp = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <DismissKeyboard>
      <View style={styles.container}>
        <Body onSubmit={onSubmit} />
        <Footer color='secondary'>
          <Text color='light'>Have an Account?</Text>
          <Link to='/' component={Button} title='Log In' color={theme.colors.logo}>
            <Text>{'  '}Log In</Text>
          </Link>
        </Footer>
      </View>
    </DismissKeyboard>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default SignUp;