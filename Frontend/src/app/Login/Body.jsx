import React from "react";
import { KeyboardAvoidingView, StyleSheet } from "react-native";
import { Formik } from "formik";

import LoginForm from "./LoginForm";

const initialValues = {
  username: "",
  password: "",
};

const Body = ({ setUser }) => {
  const onSubmit = ({ username, password }) => {
    if (username === "testUser" && password === "password")
      setUser({ username: "testUser" });
    else alert("invalid username or password");
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <LoginForm onSubmit={handleSubmit} />
        </KeyboardAvoidingView>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Body;
