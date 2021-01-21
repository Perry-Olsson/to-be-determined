import React from "react";
import { Formik } from "formik";

import RegisterForm from "./RegisterForm";
import { useRegister, useLogin } from "../../hooks";

const Body = () => {
  const [tryRegister, { loading }] = useRegister();
  const [tryLogin] = useLogin();
  const onSubmit = async input => {
    const user = await tryRegister(input);
    if (user)
      tryLogin({ emailOrUsername: user.email, password: input.password });
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => (
        <RegisterForm onSubmit={handleSubmit} loading={loading} />
      )}
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
