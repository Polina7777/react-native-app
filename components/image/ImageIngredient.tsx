import React from "react";
import { Image } from "react-native";
import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  image_food: {
    width: 20,
    height: 20,
     borderRadius: 10,
    //  alignItems:'center',
     alignSelf:'center',
     justifyContent:'center',
    // zIndex:300
    // color:'white'
  },

});
export function ImageIngredient({ urlImage}: any) {
  return (
    <Image style={styles.image_food} source={{ uri: urlImage }} alt="image" />
  );
}

export default ImageIngredient;