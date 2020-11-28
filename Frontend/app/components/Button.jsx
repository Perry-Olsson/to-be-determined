import React from 'react';
import { TouchableHighlight, StyleSheet } from 'react-native';

import Text from './Text';

import theme from './theme';

const Button = ({ title, onPress, style, textStyle }) => {
  const buttonStyles = [styles.submit, style];

  return (
    <TouchableHighlight style={buttonStyles} onPress={onPress}>
      <Text fontSize='form' style={textStyle}>{title}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  submit: {
    alignItems: 'center',
    borderRadius: 4,
    padding: 10,
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.form,
    backgroundColor: theme.colors.logo
  }
});

export default Button;