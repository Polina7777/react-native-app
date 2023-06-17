import React, { Component } from 'react'
import { View, Image } from 'react-native'
import {
  Pressable,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
// const ImageComponent = (urlImage:any) => (

// //  <Image source = {{uri:urlImage}}/>
  
// )
// export default ImageComponent;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    padding: 10,
  },
 image:{
  width:50,
  height:50
 }

});

export function ImageComponent ({urlImage}:any){
console.log(urlImage,'imageurl')
 return (
<Image style = {styles.image} source = {{uri:urlImage}} alt='image'/> 
  )
}
export default ImageComponent