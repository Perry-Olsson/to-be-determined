import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NativeRouter, Route, Switch } from 'react-router-native';

import NavBar from './NavBar';
import FormikTextInput from '../components/FormikTextInput';
import Header from './Header';
import { Button } from '../components/Button';

const NextButton = ({ onPress }) => (
  <Button title='Next' onPress={onPress} />
);


const SignUpForm = () => {
  return (
    <View style={styles.container}>
      <NativeRouter>
        <Header />
        <NavBar />
        <Switch>
          <Route path='/password'>
            <FormikTextInput type='secondary' name='password' placeholder='Password' secureTextEntry />
          </Route>
          <Route path='/username'>
            <FormikTextInput type='secondary' name='username' placeholder='Username' />
          </Route>
          <Route path='/email'>
            <FormikTextInput type='secondary' name='email' placeholder='Email' />
          </Route>
          <Route path='/' exact>
            <View>
              <FormikTextInput type='secondary' name='firstName' placeholder='First Name' />
              <FormikTextInput type='secondary' name='lastName' placeholder='Last Name' />
              <NextButton onPress={() => console.log('hello')} />
            </View>
          </Route>
        </Switch>
      </NativeRouter>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '50%',
    padding: 30,
  },
});

export default SignUpForm;
