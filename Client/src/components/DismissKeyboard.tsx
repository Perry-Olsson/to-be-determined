import React, { FC } from "react";
import {
  Keyboard,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from "react-native";

const DismissKeyboard: FC<Props> = ({ children, style }) => (
  <TouchableWithoutFeedback
    onPress={() => Keyboard.dismiss()}
    accessible={false}
  >
    <View style={{ flex: 1, ...style }}>{children}</View>
  </TouchableWithoutFeedback>
);

interface Props {
  style?: ViewStyle;
}

export default DismissKeyboard;
