import React, { FC } from "react";
import { View } from "react-native";
import { Formik } from "formik";
import { Fields } from "./Fields";
import { Button, Text } from "../../../../components";
import theme from "../../../../components/theme";

export const Form: FC = () => {
  const onSubmit = (input: any) => {
    console.log(input);
  };
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => (
        <View style={{ flex: 1, width: "100%" }}>
          <Fields onSubmit={handleSubmit} />
          <Button
            style={{ paddingVertical: 20, backgroundColor: theme.colors.logo }}
            onPress={() => handleSubmit()}
          >
            <Text fontSize="form">Save!</Text>
          </Button>
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
