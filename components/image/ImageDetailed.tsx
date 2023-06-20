import React from "react";
import { Image } from "react-native";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  image_detailed: {
    width: 150,
    height: 150,
    borderRadius: 75,
    margin: 10,
    alignSelf:'center'
  },
});

export  function ImageComponentDetailedCard({ urlImage }: any) {
    return (
      <Image style={styles.image_detailed} source={{ uri: urlImage }} alt="image" />
    );
  }

export default ImageComponentDetailedCard