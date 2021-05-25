import { useFormikContext } from "formik";
import React, { FC } from "react";
import { View } from "react-native";
import { Button } from "../../../../components";
import FormikTextInput from "../../../../components/FormikTextInput";
import { TodoValues } from "./Form";
import { AntDesign } from "@expo/vector-icons";

export const NoteField: FC<{ index: number }> = ({ index }) => {
  const { values, setValues } = useFormikContext<TodoValues>();
  return index === 0 ? (
    <View key={index} style={{ flexDirection: "row", marginBottom: 30 }}>
      <FormikTextInput
        style={{ width: "80%" }}
        type="secondary"
        name={`notes[${index}]`}
        placeholder="Note"
      />
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
  ) : (
    <FormikTextInput
      key={index}
      style={{ width: "80%" }}
      type="secondary"
      name={`notes[${index}]`}
      placeholder="Note"
    />
  );
};
