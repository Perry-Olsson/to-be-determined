import React, { FC } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "../../components/Text";
import theme from "../../components/theme";
import { Logout } from "../../components";
import { User } from "../../generated/graphql";

interface UnconfirmedProps {
  user: User;
}

export const Unconfirmed: FC<UnconfirmedProps> = ({ user }) => {
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
