import React from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
//components
import Logo from "../../components/Logo";
import { useLoadingState } from "../../contexts/LoadingIcon";

const LaunchScreen = ({ launching }) => {
  const loading = useLoadingState();
  return (
    <View style={styles.container}>
      <Logo style={styles.logo} />
      <ActivityIndicator size="large" animating={!launching && loading} />
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
