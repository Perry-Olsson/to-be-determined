import React, { FC } from "react";
import { Image, View } from "react-native";

const GalaxyBackground: FC = () => (
  <>
    <View
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: -1,
        backgroundColor: "#00000040",
      }}
    />
    <Image
      style={{ position: "absolute", zIndex: -2 }}
      source={require("../../assets/stars1(reversed).jpg")}
    />
  </>
);

export default GalaxyBackground;
