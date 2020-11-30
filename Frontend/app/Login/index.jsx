import React from 'react';
import { Link, Button } from 'react-router-native';

import FadeInView from '../components/FadeInView';
import Text from '../components/Text';
import Footer from '../components/Footer';
import Body from './Body';
import DismissKeyboard from '../components/DismissKeyboard';

import theme from '../components/theme';

const Login = ({ setUser, fadeIn, setFadeIn }) => (
  <FadeInView fadeIn={fadeIn} setFadeIn={setFadeIn} duration={1000}>
    <DismissKeyboard>
      <Body setUser={setUser} />
      <Footer color='secondary'>
        <Text color='light'>New to Friday?</Text>
        <Link to='/signup' component={Button} title='Sign Up' color={theme.colors.logo}>
          <Text color='logo'>{'  '}Sign Up</Text>
        </Link>
      </Footer>
    </DismissKeyboard>
  </FadeInView>
);


export default Login;