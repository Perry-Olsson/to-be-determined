import React, { FC, useState } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { Text } from "../../components/Text";
import theme from "../../components/theme";
import { Button, constants, Logout, MenuButton } from "../../components";
import {
  useConfirmedNotificationSubscription,
  User,
  useResendConfirmationMutation,
} from "../../generated/graphql";
import { ME } from "../../graphql/queries";
import Constants from "expo-constants";
import Footer from "../../components/Footer";
import Emoji from "react-native-emoji";
import { useApolloClient } from "@apollo/client";
import { MenuDrawer } from "../Profile/MenuDrawer";

interface UnconfirmedProps {
  user: User;
}

export const Unconfirmed: FC<UnconfirmedProps> = ({ user }) => {
  const [visible, setVisible] = useState(false);
  const openMenu = () => setVisible(true);
  const client = useApolloClient();
  const [resend] = useResendConfirmationMutation();
  useConfirmedNotificationSubscription({
    variables: { email: user.email },
    onSubscriptionData: ({ client, subscriptionData }) => {
      if (subscriptionData.data?.confirmedNotification.confirmed) {
        client.writeQuery({
          query: ME,
          data: {
            me: { __typename: "User", id: user.id, confirmed: true },
          },
        });
      } else {
        alert("Something went wrong with Your confirmation :/");
      }
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.success}>
        <Text style={styles.text}>Success!</Text>
        <Emoji name="rocket" style={styles.emoji} />
      </View>
      <Text style={styles.text}>
        Just waiting for email confirmation {user.firstName}
      </Text>
      <ActivityIndicator animating={true} color="white" />
      <Text style={{ fontSize: 25, marginVertical: 15 }} color="logo">
        Can't find the email?
      </Text>
      <Button size="sm" onPress={() => resend()}>
        <Text>Resend!</Text>
      </Button>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          position: "absolute",
          bottom: 5 + constants.footer.height,
        }}
      >
        <Text style={{ fontSize: 20, marginRight: 10 }} color="logo">
          Confirmed, but still stuck?
        </Text>
        <Button
          size="sm"
          onPress={async () => {
            await client.resetStore();
          }}
        >
          <Text>Reload</Text>
        </Button>
      </View>
      <Footer>
        <MenuButton openMenu={openMenu} />
      </Footer>
      <MenuDrawer visible={visible} setVisible={setVisible} />
    </View>
  );
};

const styles = StyleSheet.create({
  logout: {
    marginLeft: 10,
  },
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 20,
    alignItems: "center",
  },
  success: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  emoji: { fontSize: 25 },
  text: {
    color: theme.colors.logo,
    fontSize: 25,
    padding: 15,
    textAlign: "center",
  },
});
