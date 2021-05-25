import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import { TodoValues } from "./Form";
import { Button } from "../../../../components";
import { AntDesign } from "@expo/vector-icons";

export const AddNoteField: FC<AddNoteFieldProps> = ({ values, setValues }) => {
  return (
    <View style={styles.container}>
      <Button
        style={{
          padding: 0,
          paddingLeft: 4,
          backgroundColor: "#00000000",
        }}
        onPress={() => {
          setValues({ ...values, notes: [...values.notes, ""] });
        }}
      >
        <AntDesign name="plus" size={24} color="black" />
      </Button>

      <Button
        style={{
          padding: 0,
          paddingLeft: 4,
          backgroundColor: "#00000000",
        }}
        onPress={() => {
          if (values.notes.length > 1) {
            setValues({
              ...values,
              notes: values.notes.slice(0, -1),
            });
            return values.notes.slice(0, -1);
          }
          return values.notes;
        }}
      >
        <AntDesign name="minus" size={24} color="black" />
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 4,
  },
});

interface AddNoteFieldProps {
  values: TodoValues;
  setValues: (
    values: React.SetStateAction<TodoValues>,
    shouldValidate?: boolean | undefined
  ) => void;
}
