import React from "react";
import { Image } from "react-native";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  image_food: {
    width: 100,
    height: 100,
    borderRadius: 50,
    margin: 10,
  },

});

export function ImageComponent({ urlImage }: any) {
  return (
    <Image style={styles.image_food} source={{ uri: urlImage }} alt="image" />
  );
}

export default ImageComponent