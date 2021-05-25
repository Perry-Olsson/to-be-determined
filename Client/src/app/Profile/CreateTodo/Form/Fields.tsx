import React, { FC } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import FormikTextInput from "../../../../components/FormikTextInput";
import { useFormikContext } from "formik";
import { TodoValues } from "./Form";
import { NoteField } from "./NoteField";

export const Fields: FC<{ onSubmit: () => void }> = ({ onSubmit }) => {
  const { values } = useFormikContext<TodoValues>();
  return (
    <View style={styles.formContainer}>
      <FormikTextInput
        type="secondary"
        name="title"
        placeholder="Title"
        autoCapitalize="none"
      />
      <FlatList
        data={values.notes}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ index }) => <NoteField index={index} />}
        keyboardShouldPersistTaps="handled"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    justifyContent: "center",
    width: "100%",
    padding: 15,
  },
  logo: {
    alignSelf: "center",
    bottom: 40,
  },
});
