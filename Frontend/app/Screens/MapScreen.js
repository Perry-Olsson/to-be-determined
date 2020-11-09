import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ImageBackground } from 'react-native';

import SvgMap from '../Map/SvgMap.js';










function MapScreen(props) {
    return (
            <ImageBackground style={styles.Background} source={require('../assets/Miami1.png')}>
                

              <SvgMap/>
              

              {/* <Text style={{ color: 'red' }}>
                STROKED Text: {this.}
              </Text> */}
                
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
        backgroundColor:  'grey'
      },




  });



export default MapScreen;