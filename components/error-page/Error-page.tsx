import { StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";
import { Image } from "expo-image";
import { textPrimary, backgroundSecondary } from "../../constants/Colors";
import { widthScreen } from "../../constants/Sizes";

export default function ErrorPage() {
  return (
    <View style={styles.error__wrapper}>
      <Image
        style={{
          width: 30,
          height: 30,
          position: "absolute",
          left: width / 2.8,
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

const styles = StyleSheet.create({
    error__wrapper: {
      alignItems: "center",
      justifyContent: "center",
      minHeight: 230,
      color: textPrimary,
      backgroundColor: backgroundSecondary,
      borderRadius: 10,
      textAlign: "center",
      width: width - 20,
      marginBottom: 15,
      flexDirection:'row'
    },
    error:{

    },
    text: {
      color: textPrimary,
    },
  });