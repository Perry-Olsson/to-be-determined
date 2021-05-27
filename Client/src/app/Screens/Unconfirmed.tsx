import React, { FC } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { Text } from "../../components/Text";
import theme from "../../components/theme";
import { Button, Logout } from "../../components";
import {
  useConfirmedNotificationSubscription,
  User,
  useResendConfirmationMutation,
} from "../../generated/graphql";
import { ME } from "../../graphql/queries";
import Constants from "expo-constants";
import Footer from "../../components/Footer";
import Emoji from "react-native-emoji";

interface UnconfirmedProps {
  user: User;
}

export const Unconfirmed: FC<UnconfirmedProps> = ({ user }) => {
  const [resend] = useResendConfirmationMutation();
  useConfirmedNotificationSubscription({
    variables: { email: user.email },
    shouldResubscribe: true,
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
      <ActivityIndicator animating={true} />
      <Text style={{ fontSize: 30, marginVertical: 30 }} color="logo">
        Can't find the email?
      </Text>
      <Button size="md" onPress={() => resend()}>
        <Text>Resend!</Text>
      </Button>
      <Footer>
        <Logout style={styles.logout} />
      </Footer>
    </View>
  );
};

const styles = StyleSheet.create({
  logout: {
    marginLeft: 10,
  },
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight + 20,
    alignItems: "center",
  },
  success: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  emoji: { fontSize: 30 },
  text: {
    color: theme.colors.logo,
    fontSize: 30,
    padding: 30,
    textAlign: "center",
  },
});
