import React from 'react';
import { Formik } from 'formik';

//components
import CreateAccountForm from './CreateAccountForm';

const initialValues = {
  username: '',
  password: '',
};

const CreateAccount = ({ onSubmit }) => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => <CreateAccountForm onSubmit={handleSubmit} /> }
    </Formik>
  );
};

export default CreateAccount;