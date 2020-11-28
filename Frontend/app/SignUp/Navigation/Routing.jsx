import React from 'react';
import { Switch, Route } from 'react-router-native';
import { useFormikContext } from 'formik';

import { Name, Email, Username, Password } from './Routes';
import Button from '../../components/Button';


const Routing = ({ onSubmit }) => {
  const { values } = useFormikContext();
  const submitStyles = !inputIsValid(values) && { backgroundColor: '#917082' };

  return (
    <Switch>
      <Route path='/password'>
        <Password />
        <Button title='Sign Up!' onPress={onSubmit} style={submitStyles} />
      </Route>
      <Route path='/username'>
        <Username />
      </Route>
      <Route path='/email'>
        <Email />
      </Route>
      <Route path='/' exact>
        <Name />
      </Route>
    </Switch>
  );
};

const inputIsValid = (values) => {
  for (let value in values) {
    if (!values[value])
      return false;
  }
  return true;
};

export default Routing;