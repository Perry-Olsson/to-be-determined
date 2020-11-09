import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Svg, {Circle} from 'react-native-svg';


import LaunchScreen from './app/Screens/LaunchScreen.js';
import MapScreen from './app/Screens/MapScreen.js';


export default function App() { 
  

  return (
    <MapScreen/>
    // <LaunchScreen/>
  );
}


console.log('checkpoint')

const styles = StyleSheet.create({
  
});
