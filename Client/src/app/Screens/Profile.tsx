import React, { FC, SetStateAction, useState } from "react";
import {
  View,
  TouchableHighlight,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { Text } from "../../components/Text";
import { useAuthStorage } from "../../contexts/AuthStorageContext";
import theme from "../../components/theme";
import { useApolloClient } from "@apollo/client";
import { Unconfirmed } from "./Unconfirmed";
import { User } from "../../generated/graphql";
import { ME } from "../../graphql/queries";

interface ProfileProps {
  user: User;
}

export const Profile: FC<ProfileProps> = ({ user }) => {
  if (!user.confirmed) return <Unconfirmed user={user} />;
  const [loggingOut, setLogginOut] = useState(false);

  return (
    <View style={styles.container}>
      <TempLogoutButton setLoggingOut={setLogginOut} />
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

const TempLogoutButton: FC<{
  setLoggingOut: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setLoggingOut }) => {
  const client = useApolloClient();
  const authStorage = useAuthStorage();
  return (
    <TouchableHighlight
      style={styles.logout}
      onPress={async () => {
        setLoggingOut(true);
        await authStorage.removeAccessToken();
        await client.resetStore();
        setLoggingOut(false);
        client.writeQuery({
          query: ME,
          data: {
            me: null,
          },
        });
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
