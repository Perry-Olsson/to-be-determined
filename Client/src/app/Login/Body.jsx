import React from "react";
import { KeyboardAvoidingView, StyleSheet } from "react-native";
import { Formik } from "formik";
import { useMutation } from "urql";

import LoginForm from "./LoginForm";
import { Login } from "../../graphql/mutations";

const initialValues = {
  email: "",
  password: "",
};

const Body = ({ setUser }) => {
  const [{ error }, login] = useMutation(Login);
  const onSubmit = async input => {
    try {
      const variables = { data: input };
      const { data } = await login(variables);
      setUser({ token: data.login.token, username: data.login.user.username });
    } catch (e) {
      console.error(e);
      console.log(error);
    }
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
