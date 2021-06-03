import "dotenv/config";

const __dev__ = process.env.NODE_ENV === "development";
export default {
  expo: {
    name: "todo-or-not-todo",
    slug: "todo-or-not-todo",
    version: "1.0.1",
    orientation: "portrait",
    icon: "./assets/MainLogo.png",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      bundleIdentifier: "com.perry.todoornottodo",
      buildNumber: "1.0.0",
      supportsTablet: true,
    },
    android: {
      package: "com.perry.todoornottodo",
      versionCode: 1,
      softwareKeyboardLayoutMode: "pan",
      adaptiveIcon: {
        foregroundImage: "./assets/MainLogo.png",
        backgroundColor: "#FFFFFF",
      },
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    extra: {
      apolloURI: __dev__
        ? process.env.DEV_APOLLO_URI
        : process.env.PROD_APOLLO_URI,
      wsURI: __dev__
        ? process.env.DEV_WEB_SOCKET_URI
        : process.env.PROD_WEB_SOCKET_URI,
    },
  },
};
