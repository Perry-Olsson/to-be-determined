import React from "react";
import { KeyboardAvoidingView, StyleSheet } from "react-native";
import { Formik } from "formik";

import LoginForm from "./LoginForm";
import { useLogin } from "../../hooks";

const initialValues = {
  emailOrUsername: "",
  password: "",
};

const Body = ({ setUser }) => {
  const [{ error }, loginUser] = useLogin();

  const onSubmit = async input => {
    try {
      const { errors, token, user } = await loginUser({ data: input });

      if (errors) alert(errors[0].message);
      else
        setUser({
          token,
          user,
        });
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
