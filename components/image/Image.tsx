import React, { Component } from 'react'
import { View, Image } from 'react-native'

const ImageComponent = (urlImage:any) => (
   <Image source = {{uri:urlImage}}
   />
)
export default ImageComponent;