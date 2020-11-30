import React from 'react';
import { View, Dimensions, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { useLocation, Link } from 'react-router-native';

import Text from '../../../components/Text';

import theme from '../../../components/theme';

const NavTab = ({ title, route, scrollNavBar, style, textStyle }) => {
  const location = useLocation();
  const containerStyle = [styles.container, route === location.pathname && styles.active, style];

  return (
    <Link to={route} component={TouchableWithoutFeedback} onPress={scrollNavBar}>
      <View style={containerStyle}>
        <Text color='secondary' fontSize='subheading' style={textStyle}>{title}</Text>
      </View>
    </Link>
  );
};

const tabWidth = (Dimensions.get('window').width - 60) / 2;

const styles = StyleSheet.create({
  container: {
    width: tabWidth,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: theme.colors.opaqueGray,
  },
  active: {
    borderColor: theme.colors.primary,
  }
});


export default NavTab;