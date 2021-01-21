import React from "react";
import { Switch, Route } from "react-router-native";
import { useFormikContext } from "formik";

import { Name, Email, Username, Password } from "./Routes";
import Button from "../../../components/Button";

const Routing = ({ onSubmit, scrollViewRef, loading }) => {
  const { values } = useFormikContext();
  const submitStyles = !isInputValid(values) && { backgroundColor: "#917082" };

  return (
    <Switch>
      <Route path="/password">
        <Password />
        <Button
          title="Register!"
          onPress={isInputValid(values) ? onSubmit : null}
          style={submitStyles}
          loading={loading}
        />
      </Route>
      <Route path="/username">
        <Username />
      </Route>
      <Route path="/email">
        <Email scrollViewRef={scrollViewRef} />
      </Route>
      <Route path="/" exact>
        <Name />
      </Route>
    </Switch>
  );
};

const isInputValid = values => {
  if (values.password !== values.passwordConfirmation) return false;
  for (let value in values) {
    if (!values[value]) return false;
  }
  return true;
};

export default Routing;
