import "dotenv/config";

export default {
  expo: {
    name: "Friday",
    slug: "Friday",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./src/assets/Fri.png",
    splash: {
      image: "./src/assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
    },
    web: {
      favicon: "./src/assets/Fri.png",
    },
    description: "",
    extra: {
      apolloURI: process.env.APOLLO_URI, // eslint-disable-line
    },
  },
};
