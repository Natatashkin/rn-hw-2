import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { LoginScreen, RegistrationScreen } from "./Screens";
import useLoadedFonts from "./hooks/useLoadedFonts";
import useWindowDimensions from "./hooks/useWindowDimensions";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const { width, height } = useWindowDimensions();
  const { fontsLoaded, onLayoutRootView } = useLoadedFonts();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ImageBackground
      onLayout={onLayoutRootView}
      style={[styles.image, styles.fixed, { width, height }]}
      resizeMode="cover"
      resizeMethod="resize"
      source={require("./assets/images/podsolnuhi-rasteniya-16317.jpeg")}
    >
      {/* <LoginScreen /> */}
      <RegistrationScreen />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
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
