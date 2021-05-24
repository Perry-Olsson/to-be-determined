import React, { FC } from "react";
import { View, StyleSheet } from "react-native";
import { Logout, Text } from "../../components";
import Footer from "../../components/Footer";
import theme from "../../components/theme";
import { useGetUser } from "../../contexts";

export const Profile: FC = () => {
  const user = useGetUser();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Logged in as {user.username}</Text>
      <Footer>
        <Logout style={styles.logout} />
      </Footer>
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
  logout: {
    marginLeft: 10,
  },
});
