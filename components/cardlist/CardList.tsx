import {
  Dimensions,
  Pressable,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { View,Text} from "../../components/Themed";
import Card from "../../components/card/Card";
import React, { useEffect, useState } from "react";
import DetailedCard from "../detailed-card/DetailedCard";
import NavigateBar from "../navigate-bar/NavigateBar";
import { recipesApi } from "../../api-requests/recipes-api";
import { categoryApi } from "../../api-requests/category-api";
import { filtersApi } from "../../api-requests/filters-api";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";

export interface ICard {
  title: string;
  options?: string[];
  description: string;
  imageUrl?: string;
}
export interface CardListProps {
  cardList: any;
  handleCardPress: any;
  navigation?: any;
}
// const { height } = Dimensions.get("window");
// const box_height = height;
// const { width } = Dimensions.get("window");
// const box_width = width - 20;
const { height } = Dimensions.get("screen");
const { width } = Dimensions.get("screen");

export default function CardList({handleClick,navigation}:any) {
  const [showDetailedCard, setShowDetailedCard] = useState(false);
  const [cardId, setCardId] = useState("");
  const [detailedCardInfo, setDetailedCardInfo] = useState();
  const [tags, setTags] = useState();

  const [cardList, setCardList] = useState([]);

  const getCardsInfo = async () => {
    try {
      const info = await recipesApi.getAllRecipes();
      setCardList(info);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCardsInfo();
  }, []);

  const filterByTag = async (tag: string) => {
    try {
      const filteredList = await filtersApi.filtersByTags(tag);
      setCardList(filteredList);
    } catch (err) {
      console.log(err);
    }
  };

  const handleTagClick = (id: string) => {
    filterByTag(id);
  };

  const getCategories = async () => {
    try {
      const tagsList = await categoryApi.getCategoriesOfRecipes();
      setTags(tagsList);
    } catch (err) {
      console.log(err);
    }
  };
  // const getDetailedCardInfo = async (id: string) => {
  //   try {
  //     const info = await recipesApi.getRecipeById(id);
  //     setDetailedCardInfo(info);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // const cardClick = (id: string) => {
  //   // setShowDetailedCard(true);
  //   getDetailedCardInfo(id);
  //   navigation.navigate('Card')
  // };
  useEffect(() => {
    getCategories();
  }, []);

  return (
    <View style={styles.card_list_wrapper}>
   
    <Text>kjjkjkkjk7676666766jksjkf</Text>
     <NavigateBar tags={tags} handleTagClick={handleTagClick} />
     
      <View style={styles.container}>
        <SafeAreaView>
        <ScrollView style={styles.scroll_wrapper}>
          {cardList.map((item, index) => {
            return (
              <TouchableOpacity key={index} style={styles.container}>
                <Pressable
                  onPress={() => {
                    handleClick(item.id);
                    navigation.navigate("Card");
                  }}
                >
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
        </SafeAreaView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "black",
    height:height,
   
    // height: box_height,
    width: width,
  },
  scroll_wrapper: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "black",
    height:height
    // padding: 10,
    // height: box_height,
    // width: width,
  },
  card_list_wrapper: {
    // flexDirection: "column",
    // backgroundColor: "black",
    // justifyContent: "space-between",
    // marginVertical: 10,
    // height:box_height,
    // width:box_width,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
