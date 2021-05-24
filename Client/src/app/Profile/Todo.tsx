import React, { FC } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { Text } from "../../components";
import theme from "../../components/theme";

export const Todo: FC<{ title: string }> = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text color="secondary" fontSize="subheading" fontWeight="bold">
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: theme.colors.logo,
    padding: 10,
    width: Dimensions.get("screen").width - 20,
  },
});
