import {
  Dimensions,
  Pressable,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { View, Text } from "../../components/Themed";
import Card from "../../components/card/Card";
import React, { useCallback, useEffect, useState } from "react";
import DetailedCard from "../detailed-card/DetailedCard";
import NavigateBar from "../navigate-bar/NavigateBar";
import { recipesApi } from "../../api-requests/recipes-api";
import { categoryApi } from "../../api-requests/category-api";
import { filtersApi } from "../../api-requests/filters-api";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { JumpingTransition } from "react-native-reanimated";
import { SplashScreen } from "expo-router";
import { heightScreen, widthScreen } from "../../constants/Sizes";

export interface ICard {
  id: number;
  attributes: IAttributes;
}
export interface IAttributes {
  title: string;
  description: string;
  ingredients: any;
  image_url: any;
  id: number | string;
}
export interface CardListProps {
  cardList: any;
  handleCardPress: any;
  navigation?: any;
}

export default function CardList({ handleClick, navigation }: any) {

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

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <View style={styles.card_list_wrapper}>
      <NavigateBar tags={tags} handleTagClick={handleTagClick} />

      <View style={styles.container}>
        <SafeAreaView>
          <ScrollView style={styles.scroll_wrapper}>
            {cardList.map((item: ICard, index) => {
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
                      id={item.id}
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
    alignItems: "center",
    backgroundColor: "black",
    width: `${widthScreen}`,
  },
  scroll_wrapper: {
    flex: 1,
    backgroundColor: "black",
    height: `${heightScreen}`,
    width: `${widthScreen}`,
  },
  card_list_wrapper: {
    height: `${heightScreen}`,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
