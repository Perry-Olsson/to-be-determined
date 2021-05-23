import { useApolloClient } from "@apollo/client";
import React, { FC, useState } from "react";
import {
  TouchableHighlight,
  StyleSheet,
  View,
  ActivityIndicator,
} from "react-native";
import { useAuthStorage } from "../contexts";
import { Text } from "./Text";
import { ME } from "../graphql/queries";

export const Logout: FC = () => {
  const [loggingOut, setLoggingOut] = useState(false);
  const client = useApolloClient();
  const authStorage = useAuthStorage();
  return (
    <>
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
    </>
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
