import React from "react";
import { Image } from "react-native";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  image_food: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },

});

export function ImageComponent({ urlImage }: any) {
  return (
    <Image style={styles.image_food} source={{ uri: urlImage }} alt="image" />
  );
}

export default ImageComponent