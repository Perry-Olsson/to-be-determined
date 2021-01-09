import React from "react";
import { View, TouchableHighlight, StyleSheet } from "react-native";

import Text from "../../components/Text";

import theme from "../../components/theme";

const TestScreen = ({ setUser }) => {
  return (
    <View style={styles.container}>
      <TempLogoutButton setUser={setUser}></TempLogoutButton>
      <Text style={styles.text}>Logged in!</Text>
    </View>
  );
};

const TempLogoutButton = ({ setUser }) => {
  return (
    <TouchableHighlight style={styles.logout} onPress={() => setUser(null)}>
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

export default TestScreen;
