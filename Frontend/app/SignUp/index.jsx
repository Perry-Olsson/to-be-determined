import React from 'react';
import { View, Button } from 'react-native';
import { Link } from 'react-router-native';


import Body from './Body';
import Text from '../components/Text';
import Footer from '../components/Footer';
import theme from '../components/theme';

const SignUp = () => {
  const onSubmit = () => {
    console.logI('to do');
  };

  return (
    <View>
      <Body onSubmit={onSubmit} />
      <Footer color='secondary'>
        <Text color='light'>Have an Account?</Text>
        <Link to='/' component={Button} title='Log In' color={theme.colors.logo}>
          <Text>{'  '}Log In</Text>
        </Link>
      </Footer>
    </View>
  );
};

export default SignUp;