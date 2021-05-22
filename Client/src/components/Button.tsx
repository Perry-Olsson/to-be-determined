import React, { FC } from "react";
import {
  TouchableHighlight,
  StyleSheet,
  ActivityIndicator,
  TextStyle,
} from "react-native";

import { Text } from "./Text";

import theme from "./theme";

interface ButtonProps {
  title: String;
  onPress: () => void;
  style?: any;
  textStyle: TextStyle;
  loading?: string[];
}

const Button: FC<ButtonProps> = ({
  title,
  onPress,
  style,
  textStyle,
  loading = [],
}) => {
  const buttonStyles = [styles.submit, style];

  return (
    <TouchableHighlight style={buttonStyles} onPress={onPress}>
      {loading.length ? (
        <ActivityIndicator animating={true} />
      ) : (
        <Text fontSize="form" style={textStyle}>
          {title}
        </Text>
      )}
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  submit: {
    alignItems: "center",
    borderRadius: 4,
    padding: 10,
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.form,
    backgroundColor: theme.colors.logo,
  },
});

export default Button;
