import React from "react";
import { Formik } from "formik";

import SignUpForm from "./SignUpForm";

const Body = () => {
  const onSubmit = values => {
    console.log(values);
  };
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default Body;
