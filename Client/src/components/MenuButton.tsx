import React, { FC } from "react";
import { Button } from "./Button";
import { Feather } from "@expo/vector-icons";

export const MenuButton: FC<{ openMenu: () => void }> = ({ openMenu }) => {
  return (
    <Button
      style={{
        backgroundColor: "#00000000",
        position: "absolute",
        right: 20,
      }}
      underlayColor="#00000000"
      onPress={openMenu}
    >
      <Feather name="menu" size={30} color="white" />
    </Button>
  );
};
