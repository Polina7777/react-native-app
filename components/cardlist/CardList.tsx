import { Button, Pressable, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Text, View} from "../../components/Themed";
import Card from "../../components/card/Card";
import EditScreenInfo from "../../components/EditScreenInfo";
import { FunctionComponent, memo } from "react";
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
// export default CardList;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    padding: 10,
    marginTop: 3,
  },

card_list_wrapper:{
  flexDirection:'column',
  marginVertical:10,
  backgroundColor: "transition",
  justifyContent:'space-between'
  // width:'100%',
},
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    // marginVertical: 30,
    // height: 1,
    // width: "80%",
  },
});
