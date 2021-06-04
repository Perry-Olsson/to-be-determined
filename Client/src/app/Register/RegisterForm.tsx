import React, { FC, useEffect, useRef, useState } from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  Keyboard,
  KeyboardEventListener,
  Dimensions,
} from "react-native";
import { NativeRouter } from "react-router-native";

import NavBar from "./Navigation/NavBar";
import Header from "./Header";
import Routing from "./Navigation/Routing";
import Constants from "expo-constants";

const RegisterForm: FC<{ onSubmit: () => void }> = ({ onSubmit }) => {
  const scrollViewRef = useRef();
  const containerRef = useRef<ScrollView | null>(null);
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const onKeyboardShow: KeyboardEventListener = (e) => {
    setTimeout(() => {
      containerRef.current!.scrollToEnd();
    }, 100);
    setKeyboardHeight(e.endCoordinates.height);
  };

  const onKeyboardHide: KeyboardEventListener = () => {
    setKeyboardHeight(0);
  };

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", onKeyboardShow);
    Keyboard.addListener("keyboardDidHide", onKeyboardHide);
    return () => {
      Keyboard.removeListener("keyboardDidShow", onKeyboardShow);
      Keyboard.removeListener("keyboardDidHide", onKeyboardHide);
    };
  }, []);

  return (
    <View
      style={{
        height: Dimensions.get("window").height - keyboardHeight,
        marginTop: Constants.statusBarHeight,
      }}
    >
      <ScrollView ref={containerRef} keyboardShouldPersistTaps="always">
        <View style={styles.container}>
          <NativeRouter>
            <Header />
            <NavBar ref={scrollViewRef} />
            <Routing onSubmit={onSubmit} scrollViewRef={scrollViewRef} />
          </NativeRouter>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
});

export default RegisterForm;
