import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import { TodoValues } from "../TodoModal";
import { Button } from "../../../../components";
import { AntDesign } from "@expo/vector-icons";
import { Text } from "../../../../components";

export const AddNoteField: FC<AddNoteFieldProps> = ({ values, setValues }) => {
  return (
    <View style={styles.container}>
      <Button style={styles.addDelete} onPress={() => add(values, setValues)}>
        <AntDesign name="plus" size={24} color="black" />
      </Button>
      <Button
        style={styles.addDelete}
        onPress={() => deleteNote(values, setValues)}
      >
        <AntDesign name="minus" size={24} color="black" />
      </Button>
      <Button
        style={styles.clearAll}
        onPress={() => clearAll(values, setValues)}
      >
        <Text style={{ color: "#fb4c4c" }}>clear all</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 4,
  },
  clearAll: {
    padding: 2,
    backgroundColor: "#00000000",
    borderColor: "#22222266",
    borderWidth: 2,
    position: "absolute",
    right: 0,
  },
  addDelete: {
    padding: 0,
    paddingLeft: 4,
    backgroundColor: "#00000000",
  },
});

const add: NoteAction = (values, setValues) => {
  setValues({ ...values, notes: [...values.notes, ""] });
};

const deleteNote: NoteAction = (values, setValues) => {
  if (values.notes.length > 1) {
    setValues({
      ...values,
      notes: values.notes.slice(0, -1),
    });
    return values.notes.slice(0, -1);
  }
  return values.notes;
};

const clearAll: NoteAction = (values, setValues) => {
  setValues({ ...values, notes: [""] });
};

interface AddNoteFieldProps {
  values: TodoValues;
  setValues: (
    values: React.SetStateAction<TodoValues>,
    shouldValidate?: boolean | undefined
  ) => void;
}

type NoteAction = (
  values: TodoValues,
  setValues: (
    values: React.SetStateAction<TodoValues>,
    shouldValidate?: boolean | undefined
  ) => void
) => void;
