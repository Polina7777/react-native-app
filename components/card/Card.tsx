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

const optionsArray = [options.kcal,options.grams];
  return (
    <View style={styles.card__wrapper}>
      <ImageComponent urlImage={imageUrl} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.card_info__wrapper}>
        <View style={styles.options__wrapper}>
            {optionsArray.map((item,index) =>{
            return  <Text key={index} style={styles.option}>
                {item}
              </Text>
            })}
       </View>

        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}
const { width } = widthScreen;
const { height } = heightScreen;
const box_count = 7;
const tag_width = width - 20;
const styles = StyleSheet.create({
  card__wrapper: {
    alignItems: "center",
    justifyContent: "center",
    fontSize: 12,
    fontWeight: "bold",
    minHeight: 250,
    color: "#cfe38a",
    backgroundColor: "#302137",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 3,
    textAlign: "center",
    width: tag_width,
    marginBottom: 15,
  },
  title: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#cfe38a",
    paddingVertical: 10,
  },
  card_info__wrapper: {
    flexDirection: "column",
    backgroundColor: "transition",
  },
  options__wrapper: {
    backgroundColor: "transition",
  },
  option: {
    color: "#cfe38a",
    fontSize: 10,
  },
  description: {
    color: "#cfe38a",
  },
});
