import React from 'react';
import { Link, Button } from 'react-router-native';

import FadeInView from '../components/FadeInView';
import Text from '../components/Text';
import Footer from '../components/Footer';
import Body from './Body';

import theme from '../components/theme';

const Login = ({ setUser }) => {

  const onSubmit = ({ username, password }) => {
    if (username === 'testUser' && password === 'password')
      setUser({ username: 'testUser' });
    else
      alert('invalid username or password');
  };

  return (
    <FadeInView duration={1000}>
      <Body onSubmit={onSubmit} />
      <Footer color='secondary'>
        <Text color='light'>New to Friday?</Text>
        <Link to='/signup' component={Button} title='Sign Up' color={theme.colors.logo}>
          <Text color='logo'>{'  '}Sign Up</Text>
        </Link>
      </Footer>
    </FadeInView>
  );
};

export default Login;