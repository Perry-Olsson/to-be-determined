import React, { FC } from "react";
import { KeyboardAvoidingView, StyleSheet, View } from "react-native";
import { Formik } from "formik";
import { Fields } from "./Fields";

export const Form: FC = () => {
  const onSubmit = (input: any) => {
    console.log(input);
  };
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => (
        <View style={{ width: "100%" }}>
          <Fields onSubmit={handleSubmit} />
        </View>
      )}
    </Formik>
  );
};

export const initialValues: TodoValues = {
  title: "",
  notes: [""],
};

export interface TodoValues {
  title: string;
  notes: string[];
}
