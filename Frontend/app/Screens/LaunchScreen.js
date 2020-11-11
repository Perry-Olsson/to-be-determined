import React from 'react';
import { ImageBackground, StyleSheet, Image } from 'react-native';

function LaunchScreen() {

  return (

    <ImageBackground style={styles.background} source={require('../assets/stars1(reversed).jpg')}>
      <Image style={styles.logo} source={require('../assets/Friday(compact).png')} />
    </ImageBackground>
  );
}


const styles = StyleSheet.create({
  background:
  {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo:
  {
    width: 250,
    height: 100,
    borderRadius: 3,
    padding: 20
  }
});

export default LaunchScreen;
