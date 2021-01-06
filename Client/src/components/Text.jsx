import React from "react";
import { Text as NativeText, StyleSheet } from "react-native";

import theme from "./theme";

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
  colorPrimary: {
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
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
  fontSizeForm: {
    fontSize: theme.fontSizes.form
  },
  fontSizeHeader: {
    fontSize: theme.fontSizes.header,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  }
});

const Text = ({ color, fontSize, fontWeight, style, ...props }) => {
  const textStyle = [
    styles.text,
    color === "secondary" && styles.colorTextSecondary,
    color === "primary" && styles.colorTextPrimary,
    color === "light" && styles.colorLight,
    color === "dark" && styles.colorDark,
    color === "logo" && styles.colorLogo,
    fontSize === "subheading" && styles.fontSizeSubheading,
    fontSize === "form" && styles.fontSizeForm,
    fontSize === "header" && styles.fontSizeHeader,
    fontWeight === "bold" && styles.fontWeightBold,
    style,
  ];

  return <NativeText style={textStyle} {...props} />;
};

export default Text;