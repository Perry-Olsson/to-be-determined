import React from "react";

import FormikTextInput from "../../../../components/FormikTextInput";
import NextButton from "../NextButton";

import { useNextRoute } from "../../../../hooks";
import theme from "../../../../components/theme";
import { useFormikContext } from "formik";

export const Name = ({ invalidFields: {firstName, lastName} }) => {
  const { setFieldTouched } = useFormikContext()
  const next = useNextRoute("/email");
  const invalid = firstName || lastName
  const buttonStyle = invalid && { backgroundColor: theme.colors.inActiveLogo}

  return (
    <>
      <FormikTextInput
        type="secondary"
        name="firstName"
        placeholder="First Name"
        autoFocus
      />
      <FormikTextInput
        type="secondary"
        name="lastName"
        placeholder="Last Name"
      />
      <NextButton onPress={ invalid ? () => {
        setFieldTouched("firstName")
        setFieldTouched("lastName")
      } : next} style={buttonStyle} />
    </>
  );
};

export const Email = ({ scrollViewRef, invalidFields: { email } }) => {
  const { setFieldTouched } = useFormikContext()
  const nextRoute = useNextRoute("/username");
  const handleNextRoute = () => {
    nextRoute();
    scrollViewRef.current.toEnd();
  };
  const invalid =  email 
  const buttonStyle = invalid && { backgroundColor: theme.colors.inActiveLogo}

  return (
    <>
      <FormikTextInput
        type="secondary"
        name="email"
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        autoFocus
      />
      <NextButton onPress={invalid ? () => setFieldTouched("email"): handleNextRoute} style={buttonStyle} />
    </>
  );
};

export const Username = ({ invalidFields: {username}}) => {
  const { setFieldTouched } = useFormikContext()
  const next = useNextRoute("/password");
  const invalid =  username
  const buttonStyle = invalid && { backgroundColor: theme.colors.inActiveLogo}

  return (
    <>
      <FormikTextInput
        type="secondary"
        name="username"
        placeholder="Username"
        autoCapitalize="none"
        autoFocus
      />
      <NextButton onPress={invalid ? () => setFieldTouched("username") : next} style={buttonStyle}/>
    </>
  );
};

export const Password = () => (
  <>
    <FormikTextInput
      type="secondary"
      name="password"
      placeholder="Password"
      autoFocus
      secureTextEntry
    />
    <FormikTextInput
      type="secondary"
      name="passwordConfirmation"
      placeholder="Confirm password"
      secureTextEntry
    />
  </>
);
