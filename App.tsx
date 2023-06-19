import { Dimensions, StyleSheet, View } from "react-native";
import MainPage from "./components/main-page";
import "react-native-gesture-handler";

export default function App() {
  return (
    <View style={styles.container}>
      <MainPage />
    </View>
  );
}

const { height } = Dimensions.get("screen");
const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    backgroundColor: "black",
    height: height,
  },
});
