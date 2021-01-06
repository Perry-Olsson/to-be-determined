import React from "react";
import { StyleSheet, View } from "react-native";
import { useFormikContext } from "formik";

import FormikTextInput from "../../components/FormikTextInput";
import Logo from "../../components/Logo";
import SubmitButton from "../../components/Button";

const LoginForm = ({ onSubmit }) => {
  const { values } = useFormikContext();
  const submitStyles = !inputIsValid(values) && { backgroundColor: "#917082" };

  return (
    <View style={styles.formContainer}>
      <Logo style={styles.logo} />
      <FormikTextInput
        type="secondary"
        name="username"
        placeholder="Username"
      />
      <FormikTextInput
        type="secondary"
        name="password"
        placeholder="Password"
        secureTextEntry
      />
      <SubmitButton
        title="Sign in"
        onPress={inputIsValid(values) ? onSubmit : null}
        style={submitStyles}
      />
    </View>
  );
};

const inputIsValid = ({ username, password }) =>
  username && password ? true : false;

const styles = StyleSheet.create({
  formContainer: {
    justifyContent: "center",
    width: "100%",
    padding: 15,
  },
  logo: {
    alignSelf: "center",
    bottom: 40,
  },
});

export default LoginForm;
