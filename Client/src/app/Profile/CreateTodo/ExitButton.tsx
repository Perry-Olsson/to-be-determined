import React, { FC } from "react";
import { View } from "react-native";
import { Button } from "../../../components";
import { AntDesign } from "@expo/vector-icons";

export const ExitButton: FC<{
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setVisible }) => {
  return (
    <View>
      <Button
        style={{ backgroundColor: "#00000000" }}
        onPress={() => setVisible(false)}
      >
        <AntDesign name="close" size={22} color="black" />
      </Button>
    </View>
  );
};
