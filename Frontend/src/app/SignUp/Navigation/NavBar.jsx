import React, { useRef, useImperativeHandle } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';

import NavTab from './NavTab';

const NavBar = React.forwardRef((props, ref) => {
  const scrollRef = useRef();
  const scroller = {
    toStart: function() {
      scrollRef.current.scrollTo({
        x: 0,
        animated: true
      });
    },
    toUsername: function() {
      scrollRef.current.scrollTo({
        y: 0,
        x: 354,
        animated: true
      });
    },
    toEnd: function() {
      scrollRef.current.scrollToEnd({
        animated: true
      });
    }
  };

  useImperativeHandle(ref, () => {
    return { toUsername: scroller.toUsername };
  });

  return (
    <View style={styles.container}>
      <ScrollView ref={scrollRef} horizontal>
        <View onStartShouldSetResponder={() => true} style={styles.innerContainer}>
          <NavTab title='Name' route='/' scrollNavBar={scroller.toStart} />
          <NavTab title='Email' route='/email' scrollNavBar={scroller.toStart} />
          <NavTab title='Username' route='/username' scrollNavBar={scroller.toUsername} />
          <NavTab title='Password' route='/password' scrollNavBar={scroller.toEnd} />
        </View>
      </ScrollView>
    </View>
  );
}
);

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

NavBar.displayName = 'NavBar';

export default NavBar;