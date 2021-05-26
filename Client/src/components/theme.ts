import { Platform, TextStyle } from "react-native";

const theme: Theme = {
  colors: {
    textPrimary: "#13181c",
    textSecondary: "#ffffff",
    textLightGray: "#bdbdbd",
    textDarkGray: "#707070",
    primary: "#ffffff",
    secondary: "#404040",
    opaqueGray: "rgba(105, 105, 105, 0.7)",
    logo: "#deb1c6",
    error: "#fb4c4c",
  },
  fontSizes: {
    body: 16,
    header: 40,
    subheading: 22,
    form: 20,
  },
  fonts: {
    main: Platform.select({
      android: "Roboto",
      ios: "Arial",
      default: "System",
    }),
  },
  fontWeights: {
    normal: "400",
    bold: "700",
  },
};

interface Theme {
  colors: {
    textPrimary: "#13181c";
    textSecondary: "#ffffff";
    textLightGray: "#bdbdbd";
    textDarkGray: "#707070";
    primary: "#ffffff";
    secondary: "#404040";
    opaqueGray: "rgba(105, 105, 105, 0.7)";
    logo: "#deb1c6";
    error: string;
  };
  fontSizes: {
    body: 16;
    header: number;
    subheading: 22;
    form: 20;
  };
  fonts: {
    main: string;
  };
  fontWeights: {
    normal: TextStyle["fontWeight"];
    bold: TextStyle["fontWeight"];
  };
}

export default theme;
