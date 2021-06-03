import { Platform } from "react-native";

export const constants = {
  footer: {
    height: Platform.OS === "ios" ? 85 : 65,
  },
  flatListOffset: {
    height: 160,
  },
  todoModal: {
    bottomOffset: 180,
  },
  ios: Platform.OS === "ios",
};
