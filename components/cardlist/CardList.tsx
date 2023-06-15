import { Pressable, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import {View} from "../../components/Themed";
import Card from "../../components/card/Card";
import React from "react";

export interface ICard {
  title: string;
  options: string[];
  description: string;
  imageUrl: string;
}
export interface CardListProps{
    cardList:any,
    handleCardPress:any
}

export default function CardList ({cardList,handleCardPress}:CardListProps) {

  return (
    <View style={styles.card_list_wrapper}>
         <ScrollView style={styles.scroll_wrapper}>
      {cardList.map((item,index) => {
        return (
          <TouchableOpacity   key = {index}
          style = {styles.container}>
           <Pressable onPress={handleCardPress}>
          <Card
            title={item.title}
            description={item.description}
            options={item.options}
            imageUrl={item.imageUrl}
            key={index}
          />
          </Pressable>
        
          </TouchableOpacity>
        );
      })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
     padding: 10,
  },

card_list_wrapper:{
  flexDirection:'column',
  backgroundColor: "transition",
  justifyContent:'space-between',
  marginVertical:10
},
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
