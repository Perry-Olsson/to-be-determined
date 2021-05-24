import React, { FC } from "react";
import {
  TouchableHighlight,
  StyleSheet,
  ViewStyle,
  GestureResponderEvent,
  TextStyle,
} from "react-native";

interface ButtonProps {
  style?: ViewStyle | TextStyle;
  size?: ButtonSize;
  onPress: (event: GestureResponderEvent) => void;
}

type ButtonSize = "sm" | "md" | "lg";

export const Button: FC<ButtonProps> = ({ children, style, size, onPress }) => {
  const buttonStyles = [
    styles.button,
    size === "sm" && styles.sm,
    size === "md" && styles.md,
    size === "lg" && styles.lg,
    style,
  ];
  return (
    <TouchableHighlight style={buttonStyles} onPress={onPress}>
      {children}
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#ffffff",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  sm: {
    padding: 10,
  },
  md: {
    paddingHorizontal: 25,
    paddingVertical: 13,
  },
  lg: {
    paddingHorizontal: 35,
    paddingVertical: 18,
  },
});
