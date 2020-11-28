import React from 'react';

import FormikTextInput  from '../../../components/FormikTextInput';
import NextButton from '../NextButton';

import { useNext } from '../../../hooks';

export const Name = () => {
  const next = useNext('/email');

  return (
    <>
      <FormikTextInput type='secondary' name='firstName' placeholder='First Name' />
      <FormikTextInput type='secondary' name='lastName' placeholder='Last Name' />
      <NextButton onPress={next} />
    </>
  );
};

export const Email = () => {
  const next = useNext('/username');

  return (
    <>
      <FormikTextInput type='secondary' name='email' placeholder='Email' />
      <NextButton onPress={() => next('/username')} />
    </>
  );
};

export const Username = () => {
  const next = useNext('/password');

  return (
    <>
      <FormikTextInput type='secondary' name='username' placeholder='Username' />
      <NextButton onPress={next} />
    </>
  );
};

export const Password = () => (
  <FormikTextInput type='secondary' name='password' placeholder='Password' secureTextEntry />
);
