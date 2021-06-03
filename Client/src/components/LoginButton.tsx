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

const LoginButton: FC<ButtonProps> = ({
  title,
  onPress,
  style,
  textStyle,
  loading = [],
}) => {
  const buttonStyles = [styles.submit, style];

  return (
    <TouchableHighlight style={buttonStyles} onPress={onPress}>
      {loading.filter((a) => a === "LOGIN" || a === "REGISTER").length ? (
        <ActivityIndicator animating={true} color="white" />
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

export default LoginButton;
