import React, { FC } from "react";
import { StyleSheet } from "react-native";
import { Button, Text } from "..";

export const DrawerItem: FC<{
  text?: string;
  onPress: () => void;
}> = ({ children, text, onPress }) => {
  const styles = StyleSheet.create({
    container: {
      borderTopWidth: 1,
      borderTopColor: "white",
      padding: 10,
      backgroundColor: "#333333cc",
      alignItems: "flex-start",
    },
  });
  return text ? (
    <Button
      onPress={() => {
        onPress();
      }}
      underlayColor="black"
      style={styles.container}
    >
      <Text style={{ fontSize: 25 }} color="secondary">
        {text}
      </Text>
    </Button>
  ) : (
    <>{children}</>
  );
};
