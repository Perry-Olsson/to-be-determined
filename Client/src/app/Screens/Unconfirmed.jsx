import React from "react";
import { View, TouchableHighlight, StyleSheet } from "react-native";

import { Text } from "../../components/Text";
import { useAuthStorage } from "../../contexts/AuthStorageContext";

import theme from "../../components/theme";
import { useApolloClient } from "@apollo/client";

export const Unconfirmed = ({ user }) => {
  console.log(user);
  return (
    <View style={styles.container}>
      <TempLogoutButton></TempLogoutButton>
      <Text style={styles.text}>
        Successfull Registration! Just waiting on your email confirmation{" "}
        {user.firstName}
      </Text>
    </View>
  );
};

const TempLogoutButton = () => {
  const client = useApolloClient();
  const authStorage = useAuthStorage();
  return (
    <TouchableHighlight
      style={styles.logout}
      onPress={async () => {
        await authStorage.removeAccessToken();
        await client.resetStore();
      }}
    >
      <Text>logout</Text>
    </TouchableHighlight>
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
