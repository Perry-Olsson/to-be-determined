import React, { FC, useEffect } from "react";
import { StyleSheet, View } from "react-native";

import { useAuthorizedUserQuery } from "./hooks";
import { ProfileScreen, LaunchScreen, LoginScreen } from "./app/Screens";
import { UserProvider } from "./contexts";

interface MainProps {
  launching: boolean;
  setLaunching: React.Dispatch<boolean>;
}

const Main: FC<MainProps> = ({ launching, setLaunching }) => {
  const { user, loading, error } = useAuthorizedUserQuery();

  useEffect(() => {
    setTimeout(() => {
      setLaunching(false);
    }, twoSeconds);
  }, []);

  if ((!error && loading) || launching)
    return <LaunchScreen launching={launching} />;

  if (!user) return <LoginScreen />;

  return (
    <UserProvider user={user}>
      <View style={styles.container}>
        <ProfileScreen />
      </View>
    </UserProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const twoSeconds = 2000;

export default Main;
