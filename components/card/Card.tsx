import { Dimensions, StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";
import ImageComponent from "../image/Image";

export interface CardProps {
  title: string;
  description: string;
  options?: any;
  imageUrl?: any;
  id?: number;
}
// const { height } = Dimensions.get("window");
// const { width } = Dimensions.get("window");
const { height } = Dimensions.get("screen");
const { width } = Dimensions.get("screen");
const box_count = 7;
const box_height = height / box_count;

const tag_width = width - 20;

export default function Card({
  title,
  description,
  options,
  imageUrl,
}: CardProps) {



  return (
    <View style={styles.card__wrapper}>
      <ImageComponent urlImage={imageUrl} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.card_info__wrapper}>
        {/* <View style={styles.options__wrapper}>
            {options.split(',').map((item,index) =>{
            return  <Text key={index} style={styles.option}>
                {item}
              </Text>
            })}
       </View> */}

        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card__wrapper: {
    alignItems: "center",
    justifyContent: "center",
    fontSize: 12,
    fontWeight: "bold",
    minHeight: 250,
    borderWidth: 1,
    borderColor: "#D6FC51",
    color: "#D6FC51",
    backgroundColor: "#363333",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 3,
    textAlign: "center",
    width: tag_width,
    marginBottom:10
  },
  title: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#D6FC51",
    paddingVertical:10
  },
  card_info__wrapper: {
    flexDirection: "column",
    backgroundColor: "transition",
  },
  options__wrapper: {
    backgroundColor: "transition",
  },
  option: {
    color: "#D6FC51",
    fontSize: 10,
  },
  description: {
    color: "#D6FC51",
  },
});
