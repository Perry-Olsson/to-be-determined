import React, { FC } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "../../components/Text";
import theme from "../../components/theme";
import { Unconfirmed } from "./Unconfirmed";
import { User } from "../../generated/graphql";
import { Logout } from "../../components";

interface ProfileProps {
  user: User;
}

export const Profile: FC<ProfileProps> = ({ user }) => {
  if (!user.confirmed) return <Unconfirmed user={user} />;

  return (
    <View style={styles.container}>
      <Logout />
      <Text style={styles.text}>Logged in as {user.username}</Text>
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
    fontSize: 30,
  },
});
