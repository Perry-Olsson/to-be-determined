import React from "react";
import { Image, StyleSheet } from "react-native";

const Logo = ({ style }) => {
  const logoStyles = [styles.logo, style];

  return (
    <Image
      style={logoStyles}
      source={require("../assets/Friday(compact).png")}
    />
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 250,
    height: 100,
    borderRadius: 3,
    padding: 20,
  },
});

export default Logo;
