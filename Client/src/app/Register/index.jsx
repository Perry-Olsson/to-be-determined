import React from "react";
import { Button, StyleSheet } from "react-native";
import { Link } from "react-router-native";

import DismissKeyboard from "../../components/DismissKeyboard";
import Body from "./Body";
import { Text } from "../../components/Text";
import Footer from "../../components/Footer";

import theme from "../../components/theme";

const Register = () => (
  <DismissKeyboard>
    <Body />
    <Footer color="secondary">
      <Text style={styles.text} color="secondary">
        Have an Account?
      </Text>
      <Link
        title="Log In"
        to="/"
        component={Button}
        color={theme.colors.logo}
      />
    </Footer>
  </DismissKeyboard>
);

const styles = StyleSheet.create({
  text: {
    paddingRight: Platform.OS === "ios" ? 0 : 10,
  },
});

export default Register;
