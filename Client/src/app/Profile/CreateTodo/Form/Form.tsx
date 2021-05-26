import React, { FC } from "react";
import { View } from "react-native";
import { Formik } from "formik";
import { Fields } from "./Fields";
import { Button, Text } from "../../../../components";
import theme from "../../../../components/theme";

interface Props {
  handleSubmit: () => void;
}
export const Form: FC<Props> = ({ handleSubmit }) => {
  return (
    <>
      <View style={{ flex: 1, width: "100%" }}>
        <Fields />
        <Button
          style={{ paddingVertical: 20, backgroundColor: theme.colors.logo }}
          onPress={() => handleSubmit()}
        >
          <Text fontSize="form">Save!</Text>
        </Button>
      </View>
    </>
  );
};
