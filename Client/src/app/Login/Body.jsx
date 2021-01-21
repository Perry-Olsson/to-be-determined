import React from "react";
import { KeyboardAvoidingView, StyleSheet } from "react-native";
import { Formik } from "formik";

import LoginForm from "./LoginForm";
import { useLogin } from "../../hooks";

const Body = () => {
  const [tryLogin, { loading }] = useLogin();

  const onSubmit = input => tryLogin(input);

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <LoginForm onSubmit={handleSubmit} loading={loading} />
        </KeyboardAvoidingView>
      )}
    </Formik>
  );
};

const initialValues = {
  emailOrUsername: "",
  password: "",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Body;
