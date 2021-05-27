import React, { FC } from "react";
import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import { Todo } from "./Todo";
import { constants, Text } from "../../components";
import { User } from "../../generated/graphql";

interface Props {
  user: User;
}

export const TodoList: FC<Props> = ({ user }) => {
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
        data={user.todos}
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
