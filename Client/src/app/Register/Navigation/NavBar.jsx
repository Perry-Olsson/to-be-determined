import React, { useRef, useImperativeHandle } from "react";
import { ScrollView, View, StyleSheet } from "react-native";

import NavTab from "./NavTab";

const NavBar = React.forwardRef((props, ref) => {
  const scrollRef = useRef();
  const scroll = {
    toStart: function () {
      scrollRef.current.scrollTo({
        x: 0,
        animated: true,
      });
    },
    toEnd: function () {
      scrollRef.current.scrollToEnd({
        animated: true,
      });
    },
  };

  useImperativeHandle(ref, () => {
    return { toEnd: scroll.toEnd };
  });

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollRef}
        keyboardShouldPersistTaps="handled"
        horizontal
      >
        <View style={styles.innerContainer}>
          <NavTab title="Name" route="/" scrollNavBar={scroll.toStart} />
          <NavTab title="Email" route="/email" scrollNavBar={scroll.toStart} />
          <NavTab
            title="Username"
            route="/username"
            scrollNavBar={scroll.toEnd}
          />
          <NavTab
            title="Password"
            route="/password"
            scrollNavBar={scroll.toEnd}
          />
        </View>
      </ScrollView>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
    height: 65,
  },
  innerContainer: {
    width: "100%",
    flexDirection: "row",
  },
});

NavBar.displayName = "NavBar";

export default NavBar;
