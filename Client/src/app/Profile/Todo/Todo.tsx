import React, { FC } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { Button, Text } from "../../../components";
import { Feather } from "@expo/vector-icons";
import theme from "../../../components/theme";
import { _Todo } from "../types";
import { NotesList } from "./NotesList";

export const Todo: FC<{ todo: _Todo }> = ({ todo }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text color="secondary" style={{ fontSize: 30 }} fontWeight="bold">
          {todo.title}
        </Text>
        <NotesList notes={todo.notes} />
      </View>
      <Button
        style={styles.button}
        onPress={() => console.log("todo deleted")}
        underlayColor="#00000000"
      >
        <Feather name="trash-2" size={24} color="white" />
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: theme.colors.logo,
    padding: 10,
    width: Dimensions.get("screen").width - 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#00000000",
    padding: 0,
    alignSelf: "flex-start",
  },
});
