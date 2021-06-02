import React from "react";
import { Button, Platform, StyleSheet } from "react-native";
import { Link } from "react-router-native";

import FadeInView from "../../components/FadeInView";
import { Text } from "../../components/Text";
import Footer from "../../components/Footer";
import Body from "./Body";
import DismissKeyboard from "../../components/DismissKeyboard";

import theme from "../../components/theme";

export const Login = ({ fadeIn, setFadeIn }) => (
  <FadeInView
    style={{ flex: 1 }}
    fadeIn={fadeIn}
    setFadeIn={setFadeIn}
    duration={1000}
  >
    <DismissKeyboard>
      <Body />
      <Footer color="secondary">
        <Text style={styles.text} color="light">
          New to Friday?
        </Text>
        <Link
          to="/register"
          component={Button}
          title="Sign up"
          color={theme.colors.logo}
        />
      </Footer>
    </DismissKeyboard>
  </FadeInView>
);

const styles = StyleSheet.create({
  text: {
    paddingRight: Platform.OS === "ios" ? 0 : 10,
  },
});
