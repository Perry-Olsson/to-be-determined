import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';

import NavTab from './NavTab';

const NavBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <View onStartShouldSetResponder={() => true} style={styles.innerContainer}>
          <NavTab title='Name' route='/' />
          <NavTab title='Email' route='/email' />
          <NavTab title='Username' route='/username' />
          <NavTab title='Password' route='/password' />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
    height: 65,
  },
  innerContainer: {
    width: '100%',
    flexDirection: 'row',
  }
});

export default NavBar;