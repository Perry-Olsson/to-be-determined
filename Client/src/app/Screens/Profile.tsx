import React, { FC, useState } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { Text } from "../../components/Text";
import theme from "../../components/theme";
import { Unconfirmed } from "./Unconfirmed";
import { User } from "../../generated/graphql";
import { RefetchUser } from "./types";
import { Logout } from "../../components";

interface ProfileProps {
  user: User;
  refetchUser: RefetchUser;
}

export const Profile: FC<ProfileProps> = ({ user, refetchUser }) => {
  if (!user.confirmed)
    return <Unconfirmed user={user} refetchUser={refetchUser} />;
  const [loggingOut, setLogginOut] = useState(false);

  return (
    <View style={styles.container}>
      <Logout setLoggingOut={setLogginOut} />
      <Text style={styles.text}>Logged in as {user.fullName}</Text>
      {loggingOut ? (
        <View>
          <Text fontSize="header" color="light">
            Logging you out...
          </Text>
          <ActivityIndicator
            style={{ marginTop: 20 }}
            animating={true}
            size="large"
          />
        </View>
      ) : null}
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
