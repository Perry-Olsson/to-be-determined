import React from "react";
import { useLocation } from "react-router-native";
import Constants from "expo-constants";

import { Text } from "../../components/Text";

const Header = () => {
  const location = useLocation();

  const getHeader = ({ pathname }) => {
    switch (pathname) {
      case "/":
        return "Enter your name";
      case "/email":
        return "Enter your email";
      case "/username":
        return "Create a username";
      case "/password":
        return "Create a password";
    }
  };

  return (
    <Text
      fontWeight="bold"
      color="logo"
      style={{
        alignSelf: "center",
        marginTop: Constants.statusBarHeight,
        marginBottom: 10,
        fontSize: 30
      }}
    >
      {getHeader(location)}
    </Text>
  );
};

export default Header;
