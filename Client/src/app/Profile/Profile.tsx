import React, { FC, useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { Button, Logout, Text } from "../../components";
import Footer from "../../components/Footer";
import theme from "../../components/theme";
import { useGetUser } from "../../contexts";
import { CreateTodo } from "./CreateTodo";
import { TodoList } from "./TodoList";
import { Feather } from "@expo/vector-icons";
import { Drawer } from "../../components/Drawer/Drawer";
import { DrawerItem } from "../../components/Drawer/DrawerItem";
import { MenuDrawer } from "./MenuDrawer";

export const Profile: FC = () => {
  const [visible, setVisible] = useState(false);
  const user = useGetUser();

  const openMenu = () => setVisible(true);

  return (
    <View style={styles.container}>
      <TodoList user={user} />
      <CreateTodo />
      <Footer>
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
        <View style={styles.footerTextContainer}>
          <Text style={styles.text}>{user.username}</Text>
        </View>
      </Footer>
      <MenuDrawer visible={visible} setVisible={setVisible} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: theme.colors.logo,
    fontSize: 20,
  },
  logout: {
    position: "absolute",
    left: 10,
    marginLeft: 10,
  },
  footerTextContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: Dimensions.get("screen").width / 2,
  },
});
