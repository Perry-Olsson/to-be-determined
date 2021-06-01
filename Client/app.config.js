import "dotenv/config";

const __prod__ = process.env.NODE_ENV === "production";
export default {
  expo: {
    name: "todo-or-not-todo",
    slug: "todo-or-not-todo",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/logo.png",
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
      bundleIdentifier: "com.perry.todo_or_not_todo",
      buildNumber: "1.0.0",
      supportsTablet: true,
    },
    android: {
      package: "com.perry.todo_or_not_todo",
      versionCode: 1,
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#FFFFFF",
      },
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    extra: {
      apolloURI: __prod__ ?  process.env.PROD_APOLLO_URI : process.env.DEV_APOLLO_URI,
      wsURI: __prod__ ? process.env.PROD_WEB_SOCKET_URI : process.env.DEV_WEB_SOCKET_URI
    },
  },
};
