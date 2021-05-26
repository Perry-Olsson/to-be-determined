import React, { FC } from "react";
import { TextStyle } from "react-native";
import { Text as NativeText, StyleSheet } from "react-native";

import theme from "./theme";

interface TextProps {
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  style?: TextStyle;
  restProps?: any;
}

export const Text: FC<TextProps> = ({
  color,
  fontSize,
  fontWeight,
  style,
  ...props
}) => {
  const textStyle = [
    styles.text,
    color === "secondary" && styles.colorTextSecondary,
    color === "primary" && styles.colorTextPrimary,
    color === "light" && styles.colorLight,
    color === "dark" && styles.colorDark,
    color === "logo" && styles.colorLogo,
    color === "error" && styles.colorError,
    fontSize === "subheading" && styles.fontSizeSubheading,
    fontSize === "form" && styles.fontSizeForm,
    fontSize === "header" && styles.fontSizeHeader,
    fontWeight === "bold" && styles.fontWeightBold,
    style,
  ];

  return <NativeText style={textStyle} {...props} />;
};

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },
  colorTextPrimary: {
    color: theme.colors.textPrimary,
  },
  colorLight: {
    color: theme.colors.textLightGray,
  },
  colorDark: {
    color: theme.colors.textDarkGray,
  },
  colorLogo: {
    color: theme.colors.logo,
  },
  colorError: {
    color: theme.colors.error,
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
  fontSizeForm: {
    fontSize: theme.fontSizes.form,
  },
  fontSizeHeader: {
    fontSize: theme.fontSizes.header,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
});
