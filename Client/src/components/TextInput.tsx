import React from "react";
import {
  TextInput as NativeTextInput,
  StyleSheet,
  TextInputProps,
} from "react-native";

const styles = StyleSheet.create({
  input: {
    padding: 10,
    fontSize: 20,
    borderWidth: 2,
    borderRadius: 4,
  },
});

const TextInput = React.forwardRef<NativeTextInput, TextInputProps>(
  ({ style, ...props }, ref) => {
    const textInputStyle = [styles.input, style];

    return <NativeTextInput ref={ref} style={textInputStyle} {...props} />;
  }
);

export default TextInput;
