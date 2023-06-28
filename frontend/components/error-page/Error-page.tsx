import { StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";
import { Image } from "expo-image";
import { textPrimary, backgroundSecondary } from "../../constants/Colors";
import { heightScreen, widthScreen } from "../../constants/Sizes";
import React from "react";
import VerticalStepIndicator from "../slider/Slider";




export default function ErrorPage() {
  return (
    <View style={styles.error__wrapper}>
  
      <Image
        style={{
          width: 60,
          height: 60,
        }}
        source={{
          uri: "https://www.svgrepo.com/show/433052/error.svg",
        }}
      />
      <View style={styles.error}>
        <Text style={styles.text}>NO RESULT !</Text>
      </View>
    </View>
  );
}
const { width } = widthScreen;
const {height} = heightScreen;

const styles = StyleSheet.create({
  error__wrapper: {
    alignItems: "center",
    justifyContent: "center",
    minHeight: height/1.4,
    backgroundColor: backgroundSecondary,
    borderRadius: 10,
    textAlign: "center",
    width: width - 20,
    marginBottom: 15,
  },
  error: { justifyContent: "center" },
  text: {
    color: textPrimary,
    backgroundColor: backgroundSecondary,
    fontSize:20
  },
});
