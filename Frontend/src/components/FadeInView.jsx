import React, { useRef, useEffect } from 'react';
import { Animated } from 'react-native';

const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(props.fadeIn ? 0 : 1)).current;

  useEffect(() => {
    if (props.fadeIn) {
      Animated.timing(
        fadeAnim,
        {
          toValue: 1,
          duration: props.duration || 2000,
          useNativeDriver: false,
        }
      ).start();
      if (props.setFadeIn) props.setFadeIn(false);
    }
  }, [fadeAnim]);

  return (
    <Animated.View style={{ ...props.style, flex: 1, opacity: fadeAnim }}>
      {props.children}
    </Animated.View>
  );
};

export default FadeInView;