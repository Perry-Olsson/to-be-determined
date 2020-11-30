import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ImageBackground, TouchableHighlight } from 'react-native';

import SvgMap from '../Map/SvgMap';






const TempLogoutButton = ({ setUser }) => {
  return (
    <TouchableHighlight style={styles.logout} onPress={() => console.log('hello')}>
      <Text>logout</Text>
    </TouchableHighlight>
  );
};



function MapScreen(props) {
  return (
    <ImageBackground style={styles.Background} source={require('../../assets/Miami1.png')}>
      <View style={{ flex: 1 , height: '100%', width: '100%' }}>

        <TempLogoutButton setUser={props.setUser} />
        <SvgMap setUser={props.setUser} />


        {/* <Text style={{ color: 'red' }}>
                STROKED Text: {this.}
              </Text> */}
      </View>
    </ImageBackground>

  );
}



const styles = StyleSheet.create({
  Background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    //   opacity: 0.1
  },
  Container: {
    flex: 1,
    flexDirection: 'column-reverse',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    backgroundColor: 'grey'
  },
  logout: {
    position: 'absolute',
    top: 50,
    left: 30,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    height: 30,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center'
  }
});



export default MapScreen;