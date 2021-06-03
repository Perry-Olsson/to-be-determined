import React, { FC } from "react";
import {
  View,
  StyleSheet,
  ViewStyle,
  TextInput as _TextInput,
  TextInputProps,
} from "react-native";
import { useField } from "formik";
import TextInput from "./TextInput";
import theme from "./theme";
import { Text } from "./Text";

interface Props extends TextInputProps {
  name: string;
  type: string;
  placeholder: string;
  style?: ViewStyle;
}

const FormikTextInput: FC<Props> = React.forwardRef(
  ({ name, type, style, autoCapitalize, placeholder, ...props }, ref) => {
    const [field, meta, helpers] = useField(name);

    const fieldStyles = [
      styles.field,
      type === "secondary" && styles.secondary,
      style,
    ];

    return (
      <>
        <TextInput
          ref={ref}
          onChangeText={(value: any) => helpers.setValue(value)}
          onBlur={() => helpers.setTouched(true)}
          value={field.value}
          placeholder={placeholder}
          placeholderTextColor="#aaaaaa"
          autoCapitalize={autoCapitalize}
          style={fieldStyles}
          {...props}
        />
        <View style={styles.seperator}>
          {meta.error && meta.touched ? (
            <Text color="error">{meta.error}</Text>
          ) : null}
        </View>
      </>
    );
  }
);

export const Seperator: FC = () => {
  return <View style={styles.seperator} />;
};

const styles = StyleSheet.create({
  seperator: {
    justifyContent: "center",
    height: 20,
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
