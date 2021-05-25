import React, { FC } from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { useField } from "formik";
import TextInput from "./TextInput";
import theme from "./theme";

interface Props {
  name: string;
  type: string;
  placeholder: string;
  autoCapitalize?: string;
  style?: ViewStyle;
}

const FormikTextInput: FC<Props> = ({
  name,
  type,
  style,
  autoCapitalize,
  placeholder,
  ...props
}) => {
  const [field, meta, helpers] = useField(name);
  const showError = false;

  const fieldStyles = [
    styles.field,
    type === "secondary" && styles.secondary,
    style,
  ];

  return (
    <>
      <TextInput
        onChangeText={(value: any) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        placeholder={placeholder}
        placeholderTextColor="#aaaaaa"
        error={showError}
        style={fieldStyles}
        {...props}
      />
    </>
  );
};

export const Seperator: FC = () => {
  return <View style={styles.seperator} />;
};

const styles = StyleSheet.create({
  seperator: {
    justifyContent: "center",
    height: 30,
  },
  field: {
    borderWidth: 1,
    borderColor: theme.colors.logo,
    backgroundColor: theme.colors.primary,
  },
  secondary: {
    color: theme.colors.textSecondary,
    backgroundColor: "rgba(30, 30, 30, 0.8)",
  },
});

export default FormikTextInput;
