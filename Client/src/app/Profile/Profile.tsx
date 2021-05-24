import React, { FC } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { Button, constants, Logout, Text } from "../../components";
import Footer from "../../components/Footer";
import theme from "../../components/theme";
import { useGetUser } from "../../contexts";

const CreateTodo: FC = () => {
  const styles = StyleSheet.create({
    container: {
      position: "absolute",
      bottom: constants.footer.height,
    },
  });
  return (
    <View style={styles.container}>
      <Button size="md" onPress={() => console.log("create todo")}>
        <Text>create todo</Text>
      </Button>
    </View>
  );
};

export const Profile: FC = () => {
  const user = useGetUser();

  return (
    <View style={styles.container}>
      <Footer>
        <CreateTodo />
        <Logout style={styles.logout} />
        <View style={styles.footerTextContainer}>
          <Text style={styles.text}>{user.username}</Text>
        </View>
      </Footer>
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
    justifyContent: "space-around",
    width: Dimensions.get("screen").width / 2,
  },
});
