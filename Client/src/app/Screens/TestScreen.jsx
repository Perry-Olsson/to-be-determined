import React from "react";
import { View, Text, TouchableHighlight, StyleSheet } from "react-native";

const TestScreen = ({ setUser }) => {
  return (
    <View>
      <TempLogoutButton setUser={setUser}></TempLogoutButton>
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
});

export default TestScreen;
