import React from "react";
import LoginButton from "../../../components/LoginButton";

function NextButton({ onPress }) {
  return <LoginButton title="Next" onPress={onPress} />;
}

export default NextButton;
