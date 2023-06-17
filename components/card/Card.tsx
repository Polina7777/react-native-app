import { Dimensions, StyleSheet } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import ImageComponent from "../image/Image";
import { useState } from "react";

export interface CardProps {
  title: string;
  description: string;
  options?: any;
  imageUrl?: any;
  id?: number;
}
const { height } = Dimensions.get("window");
const box_count = 7;
const box_height = height / box_count;
const { width } = Dimensions.get("window");
const tag_width = width - 20;

export default function Card({
  title,
  description,
  options,
  imageUrl,
}: CardProps) {
  let optionsList;
  const optionsFunction = () => {
    if (options) {
      optionsList = options.split(",");
    } else {
      null;
    }
  };

  return (
    <View style={styles.card__wrapper}>
      <ImageComponent urlImage={imageUrl} />
      <View></View>
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
    height: box_height,
    borderWidth: 1,
    borderColor: "#D6FC51",
    color: "#D6FC51",
    backgroundColor: "#363333",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 3,
    textAlign: "center",
    width: tag_width,
  },
  title: {
    fontSize: 10,
    fontWeight: "bold",
  },
  card_info__wrapper: {
    flexDirection: "column",
    backgroundColor: "transition",
  },
  options__wrapper: {
    backgroundColor: "transition",
    flexDirection: "row",
    gap: 10,
  },
  option: {
    color: "#D6FC51",
    fontSize: 10,
  },
  description: {
    display: "flex",
  },
});
