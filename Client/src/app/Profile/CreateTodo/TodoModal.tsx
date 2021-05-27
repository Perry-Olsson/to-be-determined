import { Formik } from "formik";
import React, { FC, useEffect, useRef, useState } from "react";
import {
  View,
  StyleSheet,
  Modal,
  Keyboard,
  KeyboardEventListener,
  Animated,
} from "react-native";
import { Text } from "../../../components";
import DismissKeyboard from "../../../components/DismissKeyboard";
import { useSaveTodo } from "../../../hooks/useCreateTodo";
import { _Todo } from "../types";
import { ExitButton } from "./ExitButton";
import { Form as TodoForm } from "./Form";
import { constants } from "../../../components";

export const TodoModal: FC<{
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ visible, setVisible }) => {
  const onSubmit = useSaveTodo(setVisible);
  const bottomAnim = useRef(new Animated.Value(180)).current; // Initial value for opacity: 0
  const topAnim = useRef(new Animated.Value(180)).current;

  const onKeyBoardShow: KeyboardEventListener = (e) => {
    Animated.timing(bottomAnim, {
      toValue: e.endCoordinates.height,
      duration: 350,
      useNativeDriver: false,
    }).start();
    Animated.timing(topAnim, {
      toValue: 50,
      duration: 350,
      useNativeDriver: false,
    }).start();
  };
  const onKeyBoardHide = () => {
    Animated.timing(bottomAnim, {
      toValue: 180,
      duration: 350,
      useNativeDriver: false,
    }).start();

    Animated.timing(topAnim, {
      toValue: 180,
      duration: 350,
      useNativeDriver: false,
    }).start();
  };
  useEffect(() => {
    Keyboard.addListener("keyboardWillShow", onKeyBoardShow);
    Keyboard.addListener("keyboardWillHide", onKeyBoardHide);
    return () => {
      Keyboard.removeListener("keyboardWillShow", onKeyBoardShow);
      Keyboard.removeListener("keyboardWillHide", onKeyBoardHide);
    };
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validate={(values) => {
        if (values.title.length === 0) return { title: "Title is required" };
      }}
    >
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
              <Animated.View
                style={{
                  ...styles.modalView,
                  top: topAnim,
                  bottom: bottomAnim,
                }}
              >
                <ExitButton setVisible={setVisible} />
                <Text fontWeight="bold" style={styles.modalText}>
                  Create your todo
                </Text>
                <TodoForm handleSubmit={handleSubmit} />
              </Animated.View>
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
    top: 180,
    bottom: 180,
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
