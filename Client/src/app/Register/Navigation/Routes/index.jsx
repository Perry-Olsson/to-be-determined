import React from "react";

import FormikTextInput from "../../../../components/FormikTextInput";
import NextButton from "../NextButton";
import { Seperator } from "../../../../components/FormikTextInput"

import { useNextRoute } from "../../../../hooks";

export const Name = () => {
  const next = useNextRoute("/email");

  return (
    <>
      <FormikTextInput
        type="secondary"
        name="firstName"
        placeholder="First Name"
        autoFocus
      />
      <Seperator />
      <FormikTextInput
        type="secondary"
        name="lastName"
        placeholder="Last Name"
      />
      <Seperator />
      <NextButton onPress={next} />
    </>
  );
};

export const Email = ({ scrollViewRef }) => {
  const nextRoute = useNextRoute("/username");
  const handleNextRoute = () => {
    nextRoute();
    scrollViewRef.current.toEnd();
  };

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
      <Seperator />
      <NextButton onPress={handleNextRoute} />
    </>
  );
};

export const Username = () => {
  const next = useNextRoute("/password");

  return (
    <>
      <FormikTextInput
        type="secondary"
        name="username"
        placeholder="Username"
        autoCapitalize="none"
        autoFocus
      />
      <Seperator />
      <NextButton onPress={next} />
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
    <Seperator />
    <FormikTextInput
      type="secondary"
      name="passwordConfirmation"
      placeholder="Confirm password"
      secureTextEntry
    />
    <Seperator />
  </>
);
