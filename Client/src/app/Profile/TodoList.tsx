import React, { FC } from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import { Todo } from "./Todo";
import { constants, Text } from "../../components";

const testTodos = [
  { id: 0, title: "clean your room", notes: ["you need to do this"] },
  { id: 1, title: "fold your damn laundry", notes: ["you need to do this"] },
  { id: 2, title: "wet your whistle", notes: ["you need to do this", "now"] },
  { id: 3, title: "have a beer", notes: ["you need to do this"] },
];

export const TodoList: FC = () => {
  return (
    <SafeAreaView
      style={{
        marginBottom: constants.flatListOffset.height,
      }}
    >
      <Text
        fontSize="header"
        fontWeight="bold"
        color="logo"
        style={{ marginVertical: 15 }}
      >
        Todos
      </Text>
      <FlatList
        data={testTodos}
        renderItem={({ item }) => <Todo title={item.title} />}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={Seperator}
      />
    </SafeAreaView>
  );
};

const Seperator: FC = () => {
  return <View style={{ height: 15 }}></View>;
};
