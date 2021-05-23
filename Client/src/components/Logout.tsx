import { useApolloClient } from "@apollo/client";
import React, { FC } from "react";
import { TouchableHighlight, StyleSheet } from "react-native";
import { useAuthStorage } from "../contexts";
import { Text } from "./Text";
import { ME } from "../graphql/queries";

export const Logout: FC<{
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
});
