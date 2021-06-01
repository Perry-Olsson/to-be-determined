import React, { FC } from "react";
import {
  StyleSheet,
  View,
  ActivityIndicator,
  Modal as NativeModal,
} from "react-native";
import { Text } from "./Text";

interface Props {
  visible: boolean;
  setVisible?: React.Dispatch<boolean>;
}

export const LoadingModal: FC<Props> = ({ children, visible }) => {
  return visible ? (
    <View style={styles.centeredView}>
      <NativeModal
        animationType="none"
        transparent={true}
        visible={true}
        onRequestClose={() => {}}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {children}
            <ActivityIndicator
              style={{ marginTop: 20 }}
              animating={true}
              size="large"
            />
          </View>
        </View>
      </NativeModal>
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
  },
});
