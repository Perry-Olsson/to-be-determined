import { Formik } from "formik";
import React, { FC, useEffect, useRef, useState } from "react";
import {
  View,
  StyleSheet,
  Modal,
  Keyboard,
  KeyboardEventListener,
  Animated,
  Dimensions,
} from "react-native";
import { Text } from "../../../components";
import DismissKeyboard from "../../../components/DismissKeyboard";
import { useSaveTodo } from "../../../hooks/useCreateTodo";
import { _Todo } from "../types";
import { ExitButton } from "./ExitButton";
import { Form as TodoForm } from "./Form";

export const TodoModal: FC<{
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ visible, setVisible }) => {
  const onSubmit = useSaveTodo(setVisible);
  const topAndBottomValue = Math.ceil(Dimensions.get("screen").height * 0.1);
  const bottomAnim = useRef(new Animated.Value(topAndBottomValue)).current; // Initial value for opacity: 0
  const topAnim = useRef(new Animated.Value(topAndBottomValue)).current;

  const onKeyBoardShow: KeyboardEventListener = (e) => {
    Animated.timing(bottomAnim, {
      toValue: e.endCoordinates.height,
      duration: 350,
      useNativeDriver: false,
    }).start();
    Animated.timing(topAnim, {
      toValue: 0,
      duration: 350,
      useNativeDriver: false,
    }).start();
  };
  const onKeyBoardHide = () => {
    Animated.timing(bottomAnim, {
      toValue: topAndBottomValue,
      duration: 350,
      useNativeDriver: false,
    }).start();

    Animated.timing(topAnim, {
      toValue: topAndBottomValue,
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
                <View
                  style={{
                    flexDirection: "row",
                    width: "100%",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text fontWeight="bold" style={styles.modalText}>
                    Create your todo
                  </Text>
                  <ExitButton setVisible={setVisible} />
                </View>
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
    fontSize: 24,
    paddingLeft: 20,
  },
});
