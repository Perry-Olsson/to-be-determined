import React, { FC } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import FormikTextInput from "../../../../components/FormikTextInput";
import { useFormikContext } from "formik";
import { NoteField } from "./NoteField";
import { AddNoteField } from "./AddNoteField";
import { TodoValues } from "../TodoModal";

export const Fields: FC = () => {
  const { values, setValues } = useFormikContext<TodoValues>();

  return (
    <View style={styles.formContainer}>
      <FormikTextInput
        type="secondary"
        name="title"
        placeholder="Title"
        autoCapitalize="sentences"
        autoFocus={true}
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
