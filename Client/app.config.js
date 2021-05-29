import "dotenv/config";

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
      bundleIdentifier: "todo-or-not-todo",
      buildNumber: "1.0.0",
      supportsTablet: true,
    },
    android: {
      package: "todo-or-not-todo",
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
      apolloURI: process.env.APOLLO_URI,
    },
  },
};
