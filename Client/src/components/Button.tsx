import React, { FC } from "react";
import {
  TouchableHighlight,
  StyleSheet,
  ViewStyle,
  GestureResponderEvent,
  TextStyle,
  ColorValue,
  ActivityIndicator,
  TouchableHighlightProps,
} from "react-native";
import { useLoadingState } from "../contexts";

export const Button: FC<ButtonProps> = ({
  children,
  style,
  size,
  onPress,
  underlayColor,
  showLoading = [],
}) => {
  const loading = useLoadingState();
  const buttonStyles = [
    styles.button,
    size === "sm" && styles.sm,
    size === "md" && styles.md,
    size === "lg" && styles.lg,
    style,
  ];

  const backgroundColor =
    style?.backgroundColor || styles.button.backgroundColor;

  return (
    <TouchableHighlight
      activeOpacity={0.3}
      underlayColor={underlayColor || `${String(backgroundColor)}b0`}
      style={buttonStyles}
      onPress={onPress}
    >
      {showLoading.filter((action) => loading.includes(action)).length ? (
        <ActivityIndicator animating={true} />
      ) : (
        children
      )}
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

interface ButtonProps extends TouchableHighlightProps {
  style?: ViewStyle | TextStyle;
  size?: ButtonSize;
  onPress: (event: GestureResponderEvent) => void;
  underlayColor?: ColorValue;
  showLoading?: LoadingAction[];
}

export type LoadingAction = "LOGIN" | "REGISTER" | "SAVE_TODO" | string;

type ButtonSize = "sm" | "md" | "lg";
