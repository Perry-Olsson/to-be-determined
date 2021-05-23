import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "../../components/Text";
import theme from "../../components/theme";
import { Logout } from "../../components";

export const Unconfirmed = ({ user, refetchUser }) => {
  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("fetched user");
      refetchUser();
    }, 1000);

    return () => clearInterval(intervalId);
  });

  return (
    <View style={styles.container}>
      <Logout />
      <Text style={styles.text}>
        Successfull Registration! Just waiting on your email confirmation{" "}
        {user.firstName}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logout: {
    position: "absolute",
    top: 50,
    left: 30,
    backgroundColor: "#ffffff",
    borderRadius: 5,
    height: 30,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: theme.colors.logo,
    fontSize: 30,
  },
});
