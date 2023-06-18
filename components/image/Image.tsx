import React, { Component } from 'react'
import { View, Image } from 'react-native'
import {
  Pressable,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const styles = StyleSheet.create({

 image_food:{
  width:60,
  height:60,
  borderRadius:30,
margin:10
 }

});

export function ImageComponent ({urlImage}:any){
 return (
<Image style = {styles.image_food} source = {{uri:urlImage}} alt='image'/> 
  )
}
export default ImageComponent