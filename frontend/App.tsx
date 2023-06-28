import {StyleSheet, View } from "react-native";
import MainPage from "./components/main-page";
import "react-native-gesture-handler";
import { widthScreen, heightScreen } from "./constants/Sizes";
import { backgroundPrimary } from "./constants/Colors";

export default function App() {
  return (
    <View style={styles.container}>
      <MainPage />
    </View>
  );
}

const { width } = widthScreen;
const { height } = heightScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    backgroundColor: backgroundPrimary,
    height: height,
  },
});
