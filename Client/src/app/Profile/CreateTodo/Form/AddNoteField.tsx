import React, { FC, useEffect, useRef } from "react";
import { FlatList, Keyboard, StyleSheet, TextInput, View } from "react-native";
import { TodoValues } from "../TodoModal";
import { Button } from "../../../../components";
import { AntDesign } from "@expo/vector-icons";
import { Text } from "../../../../components";
import { constants } from "../../../../components";
import theme from "../../../../components/theme";

export const AddNoteField: FC<AddNoteFieldProps> = ({
  values,
  setValues,
  noteRef,
  titleRef,
}) => {
  let keyboardUp = useRef(false);
  const onKeyboardShow = () => {
    keyboardUp.current = true;
  };

  const onKeyboardHide = () => {
    keyboardUp.current = false;
  };
  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", onKeyboardShow);
    Keyboard.addListener("keyboardDidHide", onKeyboardHide);
    return () => {
      Keyboard.removeListener("keyboardDidShow", onKeyboardShow);
      Keyboard.removeListener("keyboardDidHide", onKeyboardHide);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Button
        style={styles.addDelete}
        onPress={async () => {
          add(values, setValues);
          if (!constants.ios && keyboardUp.current) titleRef.current!.focus();
          setTimeout(() => {
            noteRef.current?.scrollToEnd();
          }, 250);
        }}
      >
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
        <Text style={{ color: theme.colors.error }}>clear all</Text>
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
  noteRef: React.MutableRefObject<FlatList<string> | null>;
  titleRef: React.MutableRefObject<TextInput | null>;
}

type NoteAction = (
  values: TodoValues,
  setValues: (
    values: React.SetStateAction<TodoValues>,
    shouldValidate?: boolean | undefined
  ) => void
) => void;
