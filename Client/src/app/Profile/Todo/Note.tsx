import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "../../../components";

export const Note: FC<{ note: string }> = ({ note }) => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      marginLeft: 20,
    },
  });
  return (
    <View style={styles.container}>
      <Dot />
      <Text color="secondary" style={{ fontSize: 18 }}>
        {note}
      </Text>
    </View>
  );
};
const Dot: FC = () => {
  const styles = StyleSheet.create({
    container: {
      height: 10,
      width: 10,
      borderRadius: 5,
      backgroundColor: "white",
      marginRight: 12,
    },
  });
  return <View style={styles.container} />;
};
