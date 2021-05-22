import React from "react";
import { Formik } from "formik";

import RegisterForm from "./RegisterForm";
import { useRegisterMutation, useLoginMutation } from "../../generated/graphql";
import { useLoading } from "../../hooks/useLoading";

const Body = () => {
  const [tryRegister, registerResult] = useRegisterMutation();
  const [tryLogin, loginResult] = useLoginMutation();

  useLoading(registerResult.loading, "REGISTRATION");
  useLoading(loginResult.loading, "LOGIN");

  const onSubmit = async (input) => {
    const user = await tryRegister(input);
    if (user)
      tryLogin({ emailOrUsername: user.email, password: input.password });
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => <RegisterForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  username: "",
  password: "",
  passwordConfirmation: "",
};

export default Body;
