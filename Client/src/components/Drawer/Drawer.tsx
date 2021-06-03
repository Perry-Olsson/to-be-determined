import React, { FC, SetStateAction, useEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
  SafeAreaView,
  Animated,
  Platform,
} from "react-native";
import Constants from "expo-constants";

export const Drawer: FC<{
  visible: boolean;
  setVisible: React.Dispatch<SetStateAction<boolean>>;
}> = ({ children, visible, setVisible }) => {
  const screenHeight = Dimensions.get("screen").height;
  const openAnim = useRef(new Animated.Value(screenHeight)).current;

  const closeMenu = async () => {
    Animated.timing(openAnim, {
      toValue: screenHeight,
      duration: 400,
      useNativeDriver: false,
    }).start();
    await new Promise((res) => {
      setTimeout(() => {
        res(true);
      }, 400);
    });
    setVisible(false);
  };

  useEffect(() => {
    if (visible) {
      Animated.timing(openAnim, {
        toValue: 0,
        duration: 400,
        useNativeDriver: false,
      }).start();
    }
  }, [visible]);

  return visible ? (
    <View style={styles.backDrop}>
      <Animated.View style={{ ...styles.container, top: openAnim }}>
        <SafeAreaView>
          <View style={{ borderBottomWidth: 1, borderColor: "white" }}>
            {children}
          </View>
        </SafeAreaView>
      </Animated.View>
      <TouchableWithoutFeedback onPress={() => closeMenu()}>
        <View style={styles.closeDrawer}></View>
      </TouchableWithoutFeedback>
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  container: {
    zIndex: 2,
    backgroundColor: "#333333cc",
    position: "absolute",
    paddingTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
    top: 0,
    bottom: 0,
    left: 0,
    right: Dimensions.get("screen").width / 2.5,
  },
  backDrop: {
    zIndex: 1,
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  closeDrawer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  itemContainer: {
    borderBottomWidth: 1,
    borderColor: "white",
  },
});
