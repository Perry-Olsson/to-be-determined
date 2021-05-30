import { useApolloClient } from "@apollo/client";
import React, { FC, useState } from "react";
import { ViewStyle, TextStyle, TouchableWithoutFeedback } from "react-native";
import { useAuthStorage } from "../../contexts";
import { Text } from "../Text";
import { ME } from "../../graphql/queries";
import { Button } from "../Button";
import { Modal } from "./Modal";

export const Logout: FC<{ style?: ViewStyle | TextStyle }> = ({ style }) => {
  const [loggingOut, setLoggingOut] = useState(false);
  const client = useApolloClient();
  const authStorage = useAuthStorage();

  return (
    <>
      <Button
        underlayColor="black"
        style={style}
        onPress={async () => {
          setLoggingOut(true);
          await authStorage.removeAccessToken();
          await client.resetStore();
          client.writeQuery({
            query: ME,
            data: { me: null },
          });
        }}
      >
        <Text color="secondary" style={{ fontSize: 25 }}>
          Logout
        </Text>
      </Button>
      {loggingOut ? <Modal /> : null}
    </>
  );
};
