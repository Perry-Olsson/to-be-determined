import { Formik } from "formik";
import React, { FC } from "react";
import { View, StyleSheet, Modal } from "react-native";
import { Text } from "../../../components";
import DismissKeyboard from "../../../components/DismissKeyboard";
import { ExitButton } from "./ExitButton";
import { Form } from "./Form";

export const TodoModal: FC<{
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ visible, setVisible }) => {
  const onSubmit = (input: any) => {
    console.log(input);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => (
        <Modal
          animationType="slide"
          transparent={true}
          visible={visible}
          onRequestClose={() => {
            setVisible(!visible);
          }}
        >
          <DismissKeyboard>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <ExitButton setVisible={setVisible} />
                <Text fontWeight="bold" style={styles.modalText}>
                  Create your todo
                </Text>
                <Form handleSubmit={handleSubmit} />
              </View>
            </View>
          </DismissKeyboard>
        </Modal>
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

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    position: "absolute",
    top: 100,
    bottom: 100,
    left: 20,
    right: 20,
    backgroundColor: "#ccccccee",
    borderRadius: 20,
    alignItems: "center",
    overflow: "scroll",
    flex: 1,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 30,
  },
});
