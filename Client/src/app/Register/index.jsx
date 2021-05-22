import React from "react";
import { Button } from "react-native";
import { Link } from "react-router-native";

import DismissKeyboard from "../../components/DismissKeyboard";
import Body from "./Body";
import Text from "../../components/Text";
import Footer from "../../components/Footer";

import theme from "../../components/theme";

const Register = () => (
  <DismissKeyboard>
    <Body />
    <Footer color="secondary">
      <Text color="light">Have an Account?</Text>
      <Link
        title="Log In"
        to="/"
        component={Button}
        color={theme.colors.logo}
      />
    </Footer>
  </DismissKeyboard>
);

export default Register;
