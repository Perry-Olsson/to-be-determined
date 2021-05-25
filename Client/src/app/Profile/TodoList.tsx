import React, { FC } from "react";
import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import { Todo } from "./Todo";
import { constants, Text } from "../../components";
import { testTodos } from "../../../assets/testTodos";

export const TodoList: FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text
        fontSize="header"
        fontWeight="bold"
        color="logo"
        style={styles.header}
      >
        Todos
      </Text>
      <FlatList
        data={testTodos}
        renderItem={({ item }) => <Todo todo={item} />}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={Seperator}
      />
    </SafeAreaView>
  );
};

const Seperator: FC = () => {
  return <View style={{ height: 15 }}></View>;
};

const styles = StyleSheet.create({
  container: {
    marginBottom: constants.flatListOffset.height,
    flex: 1,
  },
  header: {
    marginVertical: 15,
  },
});
