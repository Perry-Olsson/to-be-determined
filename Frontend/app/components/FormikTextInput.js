import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useField } from 'formik';

import TextInput from './TextInput';
import Text from './Text';

//style
import theme from './theme';

const FormikTextInput = ({ name, type, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = false;

  const fieldStyles = [styles.field, type === 'secondary' && styles.secondary, showError && styles.errorField];

  return (
    <>
      <TextInput
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        placeholderTextColor='#aaaaaa'
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

const styles = StyleSheet.create({
  seperator: {
    justifyContent: 'center',
    height: 30,
  },
  field: {
    borderWidth: 1,
    borderColor: theme.colors.logo,
    backgroundColor: theme.colors.primary,
  },
  secondary: {
    color: theme.colors.textSecondary,
    backgroundColor: 'rgba(30, 30, 30, 0.8)',
  },
});

export default FormikTextInput;
