import React, { FC } from "react";
import { View, StyleSheet } from "react-native";
import { Button, constants, Text } from "../../components";

export const CreateTodo: FC = () => {
  return (
    <View style={styles.container}>
      <Button
        size="md"
        onPress={() => console.log("create todo")}
        style={styles.button}
      >
        <Text>create todo</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: constants.footer.height + 20,
    paddingTop: 10,
  },
  button: {
    height: 40,
    paddingVertical: 0,
    padding: 0,
  },
});
