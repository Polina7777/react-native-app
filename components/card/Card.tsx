import { Dimensions, StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";
import ImageComponent from "../image/Image";
import { widthScreen, heightScreen } from "../../constants/Sizes";

export interface CardProps {
  title: string;
  description: string;
  options?: any;
  imageUrl?: any;
  id?: number;
}

export default function Card({
  title,
  description,
  options,
  imageUrl,
}: CardProps) {
  const optionsArray = [options.kcal, options.grams];
  return (
    <View style={styles.card__wrapper}>
      <ImageComponent urlImage={imageUrl} />
      <View style={styles.text_wrapper}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.card_info__wrapper}>
          <View style={styles.options__wrapper}>
            {optionsArray.map((item, index) => {
              return (
                <Text key={index} style={styles.option}>
                  {item}
                </Text>
              );
            })}
          </View>
        </View>

        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}
const { width } = widthScreen;
const { height } = heightScreen;

const styles = StyleSheet.create({
  card__wrapper: {
    alignItems: "center",
    justifyContent: "center",
    minHeight: 230,
    color: "#cfe38a",
    backgroundColor: "#302137",
    borderRadius: 10,
    textAlign: "center",
    width: width - 20,
    marginBottom: 15,
    flexDirection:'row'
  },
  title: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#cfe38a",
    paddingVertical: 5,
  },
  card_info__wrapper: {
    flexDirection: "column",
    backgroundColor: "transition",
  },
  text_wrapper:{
   width:(width)/2,
   backgroundColor:'#302137',
   paddingLeft:20
  },
  options__wrapper: {
    backgroundColor: "transition",
    flexDirection:'row',
  },
  option: {
    color: "#cfe38a",
    fontSize: 10,
    paddingRight:10,
    paddingVertical:10
  },
  description: {
    color: "#cfe38a",
  },
});
