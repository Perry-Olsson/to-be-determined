import React from "react";
import { StyleSheet, View } from "react-native";
import { useFormikContext } from "formik";

import FormikTextInput from "../../components/FormikTextInput";
import Logo from "../../components/Logo";
import SubmitButton from "../../components/LoginButton";
import { useLoadingState } from "../../contexts/LoadingIcon";
import { Seperator } from "../../components/FormikTextInput"

const LoginForm = ({ onSubmit }) => {
  const { values } = useFormikContext();
  const submitStyles = !inputIsValid(values) && { backgroundColor: "#917082" };
  const loading = useLoadingState();

  return (
    <View style={styles.formContainer}>
      <Logo style={styles.logo} />
      <FormikTextInput
        type="secondary"
        name="emailOrUsername"
        placeholder="Email or username"
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <Seperator />
      <FormikTextInput
        type="secondary"
        name="password"
        placeholder="Password"
        secureTextEntry
      />
      <Seperator />
      <SubmitButton
        title="Sign in"
        onPress={inputIsValid(values) ? onSubmit : null}
        style={submitStyles}
        loading={loading}
      />
    </View>
  );
};

const inputIsValid = ({ emailOrUsername, password }) =>
  emailOrUsername.length > 2 && password.length > 5 ? true : false;

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
