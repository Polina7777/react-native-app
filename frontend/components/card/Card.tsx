import {StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";
import ImageComponent from "../image/Image";
import { widthScreen} from "../../constants/Sizes";
import { backgroundSecondary, textPrimary } from "../../constants/Colors";
import { CardProps } from "../../interfaces";
import React from "react";


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

const styles = StyleSheet.create({
  card__wrapper: {
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
  title: {
    fontSize: 19,
    fontWeight: "bold",
    color: textPrimary,
    paddingVertical: 5,
  },
  card_info__wrapper: {
    flexDirection: "column",
    backgroundColor: "transition",
  },
  text_wrapper:{
   width:(width)/2,
   backgroundColor:backgroundSecondary,
   paddingLeft:20
  },
  options__wrapper: {
    backgroundColor: "transition",
    flexDirection:'row',
  },
  option: {
    color: textPrimary,
    fontSize: 10,
    paddingRight:10,
    paddingVertical:10
  },
  description: {
    color: textPrimary,
  },
});
