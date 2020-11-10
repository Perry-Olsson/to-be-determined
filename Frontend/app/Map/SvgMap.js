import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import Svg, { Image, Circle, Path, Rect } from 'react-native-svg';


function SvgMap(props) {

  return (

    <Svg height="100%" width="100%">
      <Rect
        cx="50%"
        cy="50%"
        width="100%"
        height="100%"
        fill="#5E6167"
        opacity="0.4"
      />

      <Circle
        cx="50%"
        cy="50%"
        r="138"
        stroke="#B9B9B9"
        strokeWidth="2"
        fill-opacity="0.0"
      />
      <Circle
        cx="50%"
        cy="50%"
        r="250"
        stroke="#B9B9B9"
        strokeWidth="2"
        fill-opacity="0.0"
      />
      <Circle
        cx="50%"
        cy="50%"
        r="365"
        stroke="#B9B9B9"
        strokeWidth="2"
        fill-opacity="0.0"
      />


      <Image
        // style={{height: undefined, width: undefined }}
        height="20"
        width="20"
        ResizeMode="contain"
        source={require('../assets/people/Mason.png')}

      />

      <Image
        x="50%"
        width={100}
        height={100}
        href={require('../assets/people/Mason.png')}
        border= {'1px solid #021a40'}
      />


    </Svg>


  );
}






const styles = StyleSheet.create({
  background:
        { flex: 1,
          justifyContent: 'center',
          alignItems: 'center' },
  logo:
        { width:250,
          height: 100,
          borderRadius: 3,
          padding:20

        }

});

export default SvgMap;