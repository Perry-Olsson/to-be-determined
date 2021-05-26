import React from "react";
import { Switch, Route } from "react-router-native";
import { useFormikContext } from "formik";

import { Name, Email, Username, Password } from "./Routes";
import LoginButton from "../../../components/LoginButton";
import { useLoadingState } from "../../../contexts/LoadingIcon";
import { validator } from "./utils"
import theme from "../../../components/theme";

const Routing = ({ onSubmit, scrollViewRef }) => {
  const { values } = useFormikContext();
  const invalidFields = validator(values)
  const isValid = isInputValid(invalidFields)
  const submitStyles = isValid && { backgroundColor: theme.colors.inActiveLogo };
  const loading = useLoadingState();

  return (
    <Switch>
      <Route path="/password">
        <Password />
        <LoginButton
          title="Register!"
          onPress={isValid ? onSubmit : null}
          style={submitStyles}
          loading={loading}
        />
      </Route>
      <Route path="/username" >
        <Username invalidFields={invalidFields}/>
      </Route>
      <Route path="/email">
        <Email scrollViewRef={scrollViewRef}  invalidFields={invalidFields} />
      </Route>
      <Route path="/" exact>
        <Name invalidFields={invalidFields}/>
      </Route>
    </Switch>
  );
};

const isInputValid = (values) => Object.values(values).filter(v => v).length 

export default Routing;
