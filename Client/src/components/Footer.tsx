import React, { FC } from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import theme from "./theme";

interface FooterProps {
  style?: ViewStyle;
}

const Footer: FC<FooterProps> = ({ children, style }) => {
  const footerStyles = [styles.container, style];

  return (
    <View style={footerStyles}>
      <View style={styles.content}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 85,
    borderTopWidth: 1,
    borderColor: theme.colors.opaqueGray,
  },
  content: {
    position: "absolute",
    width: "100%",
    height: 65,
    bottom: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Footer;
