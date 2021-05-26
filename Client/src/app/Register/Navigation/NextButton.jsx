import React from "react";
import LoginButton from "../../../components/LoginButton";

function NextButton({ onPress, ...props }) {
  return <LoginButton title="Next" onPress={onPress} {...props} />;
}

export default NextButton;
