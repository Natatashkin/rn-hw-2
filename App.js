import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Dimensions,
  // NativeModules,
} from "react-native";

import { LoginScreen } from "./Screens";

// const { StatusBarManager } = NativeModules;

export default function App() {
  return (
    <ImageBackground
      style={[styles.imageBackground, styles.fixed]}
      resizeMode="cover"
      source={require("./assets/images/podsolnuhi-rasteniya-16317.jpeg")}
    >
      <LoginScreen />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    zIndex: -1,
  },
  fixed: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
