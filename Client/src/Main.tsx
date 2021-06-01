import React, { FC, useEffect, useRef } from "react";
import { StyleSheet, View } from "react-native";

import { useAuthorizedUserQuery } from "./hooks";
import { ProfileScreen, LaunchScreen, LoginScreen } from "./app/Screens";
import { UserProvider } from "./contexts";
import { User } from "./generated/graphql";

interface MainProps {
  launching: boolean;
  setLaunching: React.Dispatch<boolean>;
}

const Main: FC<MainProps> = ({ launching, setLaunching }) => {
  let firstLoad = useRef(true);
  const { user, loading, error } = useAuthorizedUserQuery();

  useEffect(() => {
    setTimeout(() => {
      setLaunching(false);
    }, twoSeconds);
  }, []);

  if ((!error && loading && firstLoad.current) || launching)
    return <LaunchScreen launching={launching} />;

  firstLoad.current = false;

  if (!user) return <LoginScreen />;

  return (
    <UserProvider user={user as User}>
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
