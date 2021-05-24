import React, { FC } from "react";
import { View, StyleSheet } from "react-native";
import { Button, constants, Text } from "../../components";

export const CreateTodo: FC = () => {
  const styles = StyleSheet.create({
    container: {
      position: "absolute",
      bottom: constants.footer.height + 20,
    },
  });
  return (
    <View style={styles.container}>
      <Button size="md" onPress={() => console.log("create todo")}>
        <Text>create todo</Text>
      </Button>
    </View>
  );
};
