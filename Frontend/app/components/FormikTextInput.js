import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useField } from 'formik';

import TextInput from './TextInput';
import Text from './Text';

const styles = StyleSheet.create({
  seperator: {
    justifyContent: 'center',
    height: 30,
  },
  field: {
    borderColor: '#999999',
  },
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  const fieldStyles = [styles.field, showError && styles.errorField];

  return (
    <>
      <TextInput
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        style={fieldStyles}
        {...props}
      />
      <View style={styles.seperator}>
        {showError && <Text style={styles.errorText}>{meta.error}</Text>}
      </View>
    </>
  );
};

export default FormikTextInput;
