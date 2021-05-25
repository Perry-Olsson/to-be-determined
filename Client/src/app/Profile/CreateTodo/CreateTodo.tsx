import React, { FC, useState } from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { Button, constants, Text } from "../../../components";
import { TodoModal } from "./TodoModal";

export const CreateTodo: FC = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <TodoModal visible={modalVisible} setVisible={setModalVisible} />
      <Button
        size="md"
        onPress={() => {
          setModalVisible(!modalVisible);
        }}
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
