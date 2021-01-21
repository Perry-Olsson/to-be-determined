import React from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
//components
import Logo from "../../components/Logo";

const LaunchScreen = ({ loading }) => {
  return (
    <View style={styles.container}>
      <Logo style={styles.logo} />
      <ActivityIndicator size="large" animating={loading} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    margin: 30,
  },
});

export default LaunchScreen;
