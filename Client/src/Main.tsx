import React, { FC, useEffect } from "react";
import { StyleSheet, View } from "react-native";

import { useAuthorizedUserQuery } from "./hooks";
import { Profile, LaunchScreen, LoginScreen } from "./app/Screens";

interface MainProps {
  launching: boolean;
  setLaunching: React.Dispatch<boolean>;
}

const Main: FC<MainProps> = ({ launching, setLaunching }) => {
  const { user, loading, error, refetch } = useAuthorizedUserQuery();

  useEffect(() => {
    setTimeout(() => {
      setLaunching(false);
    }, twoSeconds);
  }, []);

  if ((!error && loading) || launching)
    return <LaunchScreen launching={launching} />;

  if (!user) return <LoginScreen />;

  return (
    <View style={styles.container}>
      <Profile user={user} refetchUser={refetch} />
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
