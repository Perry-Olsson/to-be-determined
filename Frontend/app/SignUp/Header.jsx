import React from 'react';
import { useLocation } from 'react-router-native';
import Constants from 'expo-constants';

import Text from '../components/Text';

const Header = () => {
  const location = useLocation();

  const getHeader = ({ pathname }) => {
    switch(pathname) {
    case '/':
      return 'name';
    case '/email':
      return 'email';
    case '/username':
      return 'username';
    case '/password':
      return 'password';
    }
  };

  return (
    <Text
      fontSize='header'
      fontWeight='bold'
      color='logo'
      style={{ alignSelf: 'center', marginTop: Constants.statusBarHeight, marginBottom: 10 }}>
    Enter your {getHeader(location)}
    </Text>
  );
};

export default Header;