import React from 'react';
import { View, StyleSheet } from 'react-native';
//components
import Logo from '../../components/Logo';


function LaunchScreen() {
  return (
    <View style={styles.container}>
      <Logo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default LaunchScreen;
