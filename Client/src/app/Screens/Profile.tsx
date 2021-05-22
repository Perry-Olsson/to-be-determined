import React, { FC } from "react";
import { View, TouchableHighlight, StyleSheet } from "react-native";
import Text from "../../components/Text";
import { useAuthStorage } from "../../contexts/AuthStorageContext";
import theme from "../../components/theme";
import { useApolloClient } from "@apollo/client";
import { Unconfirmed } from "./Unconfirmed";
import { User } from "../../generated/graphql";

interface ProfileProps {
  user: User;
}

export const Profile: FC<ProfileProps> = ({ user }) => {
  if (!user.confirmed) return <Unconfirmed user={user} />;

  return (
    <View style={styles.container}>
      <TempLogoutButton></TempLogoutButton>
      <Text style={styles.text}>Logged in as {user.fullName}</Text>
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
