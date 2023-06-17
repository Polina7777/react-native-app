import {
  Pressable,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { View } from "../../components/Themed";
import Card from "../../components/card/Card";
import React, { useEffect, useState } from "react";
import DetailedCard from "../detailed-card/DetailedCard";
import NavigateBar from "../navigate-bar/NavigateBar";
import { getRecipeById, recipesApi } from "../../api-requests/api-requests";

export interface ICard {
  title: string;
  options?: string[];
  description: string;
  imageUrl?: string;
}
export interface CardListProps {
  cardList: any;
  handleCardPress: any;
}
const navigateTags = ["Tag1", "Tag2", "Tag3"];

export default function CardList({ cardList, handleCardPress }: CardListProps) {
  const [showDetailedCard, setShowDetailedCard] = useState(false);
const [cardId,setCardId] = useState('')
  const [detailedCardInfo, setDetailedCardInfo] = useState();
const[tags,setTags] = useState();

  const handleTagClick = () => {
    console.log("Tag click");
  };

  const getCategories = async ()=>{
    await fetch(`http://localhost:1337/api/categories`,{
      method:'GET'
    }) .then((response) => {
      return response.json();
    })
    .then((data) => {
      setTags(data.data)
    });
  }
  const getDetailedCardInfo = async (id) => {
    try {const info = await recipesApi.getRecipeById(id)
    setDetailedCardInfo(info)}
    catch(err) {
      console.log(err)
    }
  };

  const cardClick = (id:string) => {
    console.log(id);
    setShowDetailedCard(true);
    getDetailedCardInfo(id)

  };
useEffect(()=>{
  getCategories()
},[])
  // useEffect(() => {
  //   getDetailedCardInfo();
  // }, [cardId]);
 
  return (
    <>
      {showDetailedCard && detailedCardInfo ? (
        <DetailedCard data={detailedCardInfo} />
      ) : (
        <View style={styles.card_list_wrapper}>
          <NavigateBar tags={tags} handleTagClick={handleTagClick} />
          <ScrollView style={styles.scroll_wrapper}>
            {cardList.map((item, index) => {
              return (
                <TouchableOpacity key={index} style={styles.container}>
                  <Pressable onPress={() => cardClick(item.id)}>
                    <Card
                      title={item.attributes.title}
                      description={item.attributes.description}
                      options={item.attributes.ingredients}
                      imageUrl={item.attributes.image_url}
                      id={item.attributes.id}
                      key={index}
                    />
                  </Pressable>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
      )}
    </>

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

  card_list_wrapper: {
    flexDirection: "column",
    backgroundColor: "transition",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
