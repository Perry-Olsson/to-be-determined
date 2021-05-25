import React, { FC } from "react";
import { View, FlatList } from "react-native";
import { Note } from "./Note";

export const NotesList: FC<{ notes: string[] }> = ({ notes }) => {
  return (
    <View style={{ marginTop: 10 }}>
      <FlatList
        data={notes}
        renderItem={({ item }) => <Note note={item} />}
        keyExtractor={(_, index) => index.toString()}
        ItemSeparatorComponent={Seperator}
      />
    </View>
  );
};
const Seperator: FC = () => {
  return <View style={{ height: 5 }} />;
};
