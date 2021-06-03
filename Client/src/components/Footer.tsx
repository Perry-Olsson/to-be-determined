import React, { FC } from "react";
import { View, StyleSheet, ViewStyle, Platform } from "react-native";
import theme from "./theme";

interface FooterProps {
  style?: ViewStyle;
}

const ios = Platform.OS === "ios";

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
    height: ios ? 85 : 65,
    borderTopWidth: 1,
    borderColor: theme.colors.opaqueGray,
  },
  content: {
    position: "absolute",
    width: "100%",
    height: 65,
    bottom: ios ? 20 : 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Footer;
