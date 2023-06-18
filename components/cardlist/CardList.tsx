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
import { recipesApi } from "../../api-requests/recipes-api";
import { categoryApi } from "../../api-requests/category-api";
import { filtersApi } from "../../api-requests/filters-api";

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

export default function CardList() {
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
  const getDetailedCardInfo = async (id: string) => {
    try {
      const info = await recipesApi.getRecipeById(id);
      setDetailedCardInfo(info);
    } catch (err) {
      console.log(err);
    }
  };

  const cardClick = (id: string) => {
    console.log(id);
    setShowDetailedCard(true);
    getDetailedCardInfo(id);
  };
  useEffect(() => {
    getCategories();
  }, []);

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
