import React from "react";
import {
  TouchableHighlight,
  StyleSheet,
  ActivityIndicator,
} from "react-native";

import Text from "./Text";

import theme from "./theme";

const Button = ({ title, onPress, style, textStyle, loading }) => {
  const buttonStyles = [styles.submit, style];

  return (
    <TouchableHighlight style={buttonStyles} onPress={onPress}>
      {loading ? (
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
