import React from "react";
import { ImageBackground } from "react-native";

const GalaxyBackground = props => (
  <ImageBackground
    style={{ flex: 1 }}
    source={require("../../assets/stars1(reversed).jpg")}
  >
    {props.children}
  </ImageBackground>
);

export default GalaxyBackground;
