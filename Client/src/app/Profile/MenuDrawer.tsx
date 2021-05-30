import React, { FC, SetStateAction } from "react";
import { Logout } from "../../components";
import { Drawer, DrawerItem } from "../../components/Drawer";

interface Props {
  visible: boolean;
  setVisible: React.Dispatch<SetStateAction<boolean>>;
}

export const MenuDrawer: FC<Props> = ({ visible, setVisible }) => {
  return (
    <Drawer visible={visible} setVisible={setVisible}>
      <DrawerItem onPress={() => console.log("hello")}>
        <Logout
          style={{
            backgroundColor: "#333333",
            padding: 10,
            borderTopWidth: 1,
            borderTopColor: "white",
            alignItems: "flex-start",
          }}
        />
      </DrawerItem>
      <DrawerItem onPress={() => console.log("hello")} text="Delete Account" />
    </Drawer>
  );
};
