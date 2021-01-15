import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { useQuery } from "@apollo/client";

import LaunchScreen from "./app/Screens/LaunchScreen";
import LoginScreen from "./app/Screens/LoginScreen";
import TestScreen from "./app/Screens/TestScreen";
import { ME } from "./graphql/queries";

const Main = () => {
  const { data } = useQuery(ME);
  const [launching, setLaunching] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLaunching(false);
    }, twoSeconds);
  }, []);

  if (launching) return <LaunchScreen setLaunching={setLaunching} />;
  return (
    <View style={styles.container}>
      {data && data.me ? <TestScreen /> : <LoginScreen />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const twoSeconds = 2000;

export default Main;
