import AsyncStorage from "@react-native-community/async-storage";

class AuthStorage {
  constructor(name = "auth") {
    this.namespace = name;
  }

  async getAccessToken() {
    return await AsyncStorage.getItem(`${this.namespace}:accessToken`);
  }

  async setAccessToken(accessToken) {
    await AsyncStorage.setItem(`${this.namespace}:accessToken`, accessToken);
  }

  async removeAccessToken() {
    await AsyncStorage.removeItem(`${this.namespace}:accessToken`);
  }
}

export default AuthStorage;
