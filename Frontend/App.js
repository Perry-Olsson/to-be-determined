import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ImageBackground } from 'react-native';
import Svg, { Circle } from 'react-native-svg';


import LaunchScreen from './app/Screens/LaunchScreen.js';
import MapScreen from './app/Screens/MapScreen.js';
import LoginScreen from './app/Screens/LoginScreen';


export default function App() {


  return (
    // <MapScreen />
    <ImageBackground style={styles.background} source={require('./app/assets/stars1(reversed).jpg')}>
      {/* <LaunchScreen /> */}
      <LoginScreen />
    </ImageBackground>
  );
}


console.log('checkpoint');

const styles = StyleSheet.create({
  background:
  {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

