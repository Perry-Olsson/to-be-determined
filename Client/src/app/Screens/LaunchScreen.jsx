import React from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import Logo from "../../components/Logo";
import { useLoadingState } from "../../contexts/LoadingIcon";

export const LaunchScreen = ({ launching }) => {
  const loading = useLoadingState();
  return (
    <View style={styles.container}>
      <Logo style={styles.logo} />
      <ActivityIndicator
        size="large"
        animating={!launching && loading.length}
      />
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
