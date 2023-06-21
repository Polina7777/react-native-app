import React from "react";
import { Image } from "react-native";
import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  image_ingredient: {
    width: 35,
    height: 35,
     alignSelf:'center',
     justifyContent:'center',
  },

});
export function ImageIngredient({ urlImage}: any) {
  return (
    <Image style={styles.image_ingredient} source={{ uri: urlImage }} alt="image" />
  );
}

export default ImageIngredient;