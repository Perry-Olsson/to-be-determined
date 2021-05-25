import React, { FC } from "react";
import { View } from "react-native";
import FormikTextInput from "../../../../components/FormikTextInput";

export const NoteField: FC<{ index: number }> = ({ index }) => {
  return (
    <View style={{ flex: 1 }}>
      <FormikTextInput
        key={index}
        style={{ marginBottom: 30 }}
        type="secondary"
        name={`notes[${index}]`}
        placeholder="Note"
      />
    </View>
  );
};
