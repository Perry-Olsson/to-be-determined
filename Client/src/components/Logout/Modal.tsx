import React, { FC } from "react";
import {
  StyleSheet,
  View,
  ActivityIndicator,
  Modal as NativeModal,
} from "react-native";
import { Text } from "../Text";

export const Modal: FC = () => {
  return (
    <View style={styles.centeredView}>
      <NativeModal
        animationType="none"
        transparent={true}
        visible={true}
        onRequestClose={() => {}}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text>Logging you out</Text>
            <ActivityIndicator
              style={{ marginTop: 20 }}
              animating={true}
              size="large"
            />
          </View>
        </View>
      </NativeModal>
    </View>
  );
};
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
  },
});
