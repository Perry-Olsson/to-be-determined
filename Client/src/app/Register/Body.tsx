import React from "react";
import { Formik } from "formik";

import RegisterForm from "./RegisterForm";
import { useLoading } from "../../hooks/useLoading";
import { useLogin, useRegister } from "../../hooks";
import { validator } from "./Navigation/utils";

const Body = () => {
  const [tryRegister, registerResult] = useRegister();
  const [tryLogin, loginResult] = useLogin();

  useLoading(registerResult.loading, "REGISTRATION");
  useLoading(loginResult.loading, "LOGIN");

  const onSubmit = async (input: RegisterValues) => {
    try {
      const user = await tryRegister(input);
      if (user)
        tryLogin({ emailOrUsername: user.email, password: input.password });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validate={validator}
    >
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

export interface RegisterValues {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  passwordConfirmation: string;
}

export default Body;
