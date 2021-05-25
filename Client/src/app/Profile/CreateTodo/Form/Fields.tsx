import React, { FC } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import FormikTextInput from "../../../../components/FormikTextInput";
import { useFormikContext } from "formik";
import { TodoValues } from "./Form";
import { NoteField } from "./NoteField";
import { AddNoteField } from "./AddNoteField";

export const Fields: FC<{ onSubmit: () => void }> = ({ onSubmit }) => {
  const { values, setValues } = useFormikContext<TodoValues>();

  return (
    <View style={styles.formContainer}>
      <FormikTextInput
        type="secondary"
        name="title"
        placeholder="Title"
        autoCapitalize="none"
        style={{ marginBottom: 30 }}
      />
      <AddNoteField values={values} setValues={setValues} />
      <FlatList
        data={values.notes}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ index }) => <NoteField index={index} />}
        keyboardShouldPersistTaps="handled"
        style={{ flex: 1 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    justifyContent: "center",
    width: "100%",
    padding: 15,
    flex: 1,
  },
  logo: {
    alignSelf: "center",
    bottom: 40,
  },
});
