import React, { useEffect } from "react";
import { Formik } from "formik";

import RegisterForm from "./RegisterForm";
import { useRegister, useLogin } from "../../hooks";
import { useLoadingDispatch } from "../../contexts/LoadingIcon";

const Body = () => {
  const dispatch = useLoadingDispatch();
  const [tryRegister, registerResult] = useRegister();
  const [tryLogin, loginResult] = useLogin();

  useEffect(() => {
    if (registerResult.loading)
      dispatch({ type: "loading", payload: "REGISTRATION" });
    else if (registerResult.data.register.errors)
      dispatch({ type: "done", payload: "REGISTRATION" });
  }, [registerResult.loading]);

  useEffect(() => {
    if (!loginResult.loading)
      dispatch({ type: "done", payload: "REGISTRATION" });
  }, [loginResult.loading]);

  const onSubmit = async input => {
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
