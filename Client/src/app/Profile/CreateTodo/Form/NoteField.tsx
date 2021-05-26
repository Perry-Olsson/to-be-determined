import React, { FC } from "react";
import { View } from "react-native";
import FormikTextInput from "../../../../components/FormikTextInput";

export const NoteField: FC<{ index: number }> = ({ index }) => {
  return (
    <View style={{ flex: 1 }}>
      <FormikTextInput
        key={index}
        type="secondary"
        name={`notes[${index}]`}
        placeholder="Note"
      />
    </View>
  );
};
