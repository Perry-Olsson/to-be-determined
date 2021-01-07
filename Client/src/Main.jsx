import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

import LaunchScreen from "./app/Screens/LaunchScreen";
import LoginScreen from "./app/Screens/LoginScreen";
import TestScreen from "./app/Screens/TestScreen";

const Main = () => {
  const [user, setUser] = useState(null);
  const [launching, setLaunching] = useState(true);

  useEffect(() => {
    if (!user) {
      setTimeout(() => {
        setLaunching(false);
      }, twoSeconds);
    }
  }, []);

  return launching ? (
    <LaunchScreen setUser={setUser} setLaunching={setLaunching} />
  ) : (
    <View style={styles.container}>
      {user ? (
        <TestScreen setUser={setUser} />
      ) : (
        <LoginScreen setUser={setUser} />
      )}
    </View>
  );
  // return <MapScreen />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const twoSeconds = 2000;

export default Main;
