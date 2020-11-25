import React from 'react';
import { Link, Button } from 'react-router-native';

import FadeInView from '../components/FadeInView';
import Text from '../components/Text';
import Footer from '../components/Footer';
import Body from './Body';
import DismissKeyboard from '../components/DismissKeyboard';

import theme from '../components/theme';

const Login = ({ setUser, fadeIn, setFadeIn }) => {

  const onSubmit = ({ username, password }) => {
    if (username === 'testUser' && password === 'password')
      setUser({ username: 'testUser' });
    else
      alert('invalid username or password');
  };

  return (
    <FadeInView fadeIn={fadeIn} setFadeIn={setFadeIn} duration={1000}>
      <DismissKeyboard>
        <Body onSubmit={onSubmit} />
        <Footer color='secondary'>
          <Text color='light'>New to Friday?</Text>
          <Link to='/signup' component={Button} title='Sign Up' color={theme.colors.logo}>
            <Text color='logo'>{'  '}Sign Up</Text>
          </Link>
        </Footer>
      </DismissKeyboard>
    </FadeInView>
  );
};

export default Login;