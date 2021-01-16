import React, { useRef } from "react";
import { View, StyleSheet } from "react-native";
import { NativeRouter } from "react-router-native";

import NavBar from "./Navigation/NavBar";
import Header from "./Header";
import Routing from "./Navigation/Routing";

const RegisterForm = ({ onSubmit }) => {
  const scrollViewRef = useRef();

  return (
    <View style={styles.container}>
      <NativeRouter>
        <Header />
        <NavBar ref={scrollViewRef} />
        <Routing onSubmit={onSubmit} scrollViewRef={scrollViewRef} />
      </NativeRouter>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "50%",
    padding: 30,
  },
});

export default RegisterForm;
