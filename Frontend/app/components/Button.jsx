import React from 'react';
import { TouchableHighlight } from 'react-native';

import Text from './Text';

export const Button = ({ title, onPress, style, textStyle }) => {
  return (
    <TouchableHighlight style={style} onPress={onPress}>
      <Text fontSize='form' style={textStyle}>{title}</Text>
    </TouchableHighlight>
  );
};