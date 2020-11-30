import React from 'react';
import { View, StyleSheet } from 'react-native';

import theme from '../components/theme';

const Footer = (props) => {
  const footerStyles = [styles.container, props.style];

  return (
    <View style={footerStyles}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    height: 65,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: theme.colors.opaqueGray
  },
});

export default Footer;