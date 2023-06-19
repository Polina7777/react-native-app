import { Dimensions, StyleSheet, Text, View } from "react-native";
import MainPage from "./components/main-page";
import "react-native-gesture-handler";
import { SplashScreen } from "expo-router";
import { useState, useEffect, useCallback } from "react";


export default function App() {

  return (
<View style={styles.container}>
      <MainPage />
      </View>
  
  );
}
// const { height } = Dimensions.get("window");
// const { width } = Dimensions.get("window");
const { height } = Dimensions.get("screen");
const { width } = Dimensions.get("screen");
const tag_width = width - 20;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    backgroundColor: "black",
    height: height,
  },
});
