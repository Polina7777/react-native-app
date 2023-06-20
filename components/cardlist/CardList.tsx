import {
  Dimensions,
  ImageComponent,
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
import { Icon } from "@rneui/themed";
import ImageDetailed from "../image/ImageDetailed";
import Loader from "../loader/Loader";
// import userIcon from '../../assets/userIcon.png';
export interface ICard {
  id: number;
  attributes: IAttributes;
}
export interface IAttributes {
  title: string;
  description: string;
  small_extra_info: any;
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
  const [currentTag, setCurrentTag] = useState();
  const [loading, setLoading] = useState(true);

  const getCardsInfo = async () => {
    try {
      setLoading(true)
      const info = await recipesApi.getAllRecipesWithIngredientCollection();
      setCardList(info);
      setLoading(false)
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCardsInfo();
    getCategories();
  }, []);
  useEffect(() => {
    if (currentTag) {
      filterByTag(currentTag?.id);
    }
  }, [currentTag]);
  const filterByTag = async (tag: string) => {
    try {
      setLoading(true)
      const filteredList = await filtersApi.filtersByTags(tag);
      setCardList(filteredList);
      setLoading(false)
    } catch (err) {
      console.log(err);
    }
  };

  const handleTagClick = (item) => {
    setCurrentTag(item);
  };

  const getCategories = async () => {
    try {
      setLoading(true)
      const tagsList = await categoryApi.getCategoriesOfRecipes();
      setTags(tagsList);
      setLoading(false)
    } catch (err) {
      console.log(err);
    }
  };
  return (
    
    <View style={styles.card_list_wrapper}>
      <View style={styles.user_wrapper}>
        <Text style={styles.hello_user}>Hello,User!</Text>
        <View style={styles.user_photo}></View>
      </View>

      <NavigateBar tags={tags} handleTagClick={handleTagClick} />
      {cardList.length && !loading ? (
        <View style={styles.container}>
          <Text style={styles.count_of_recipes}>
            {`${cardList.length} ${
              currentTag ? currentTag?.attributes.name : "All"
            }`}
          </Text>
          <SafeAreaView>
            <ScrollView style={styles.scroll_wrapper}>
              {cardList.map((item: ICard, index) => {
                return (
                  <TouchableOpacity key={index} style={styles.container}>
                    <Pressable
                      onPress={() => {
                        navigation.navigate("Card", {
                          itemId: item.id,
                          title: item.attributes.title,
                        });
                      }}
                    >
                      <Card
                        title={item.attributes.title}
                        description={item.attributes.description}
                        options={
                          item.attributes.small_extra_info.data.attributes
                        }
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
      ) : (
        <Loader />
      )}
    </View>
  );
}
const { width } = widthScreen;
const { height } = heightScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#11151E",
    width: width,
  },
  scroll_wrapper: {
    flex: 1,
    backgroundColor: "#11151E",
    height: height,
    width: width,
  },
  user_wrapper: {
    backgroundColor: "#11151E",
    flexDirection: "row",
    width: width,
    justifyContent: "space-between",
    padding: 20,
  },
  card_list_wrapper: {
    height: height,
  },
  count_of_recipes: {
    fontSize: 35,
    fontWeight: "600",
    color: "#cfe38a",
    alignSelf: "flex-start",
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  user_photo: {
    backgroundColor: "#cfe38a",
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  hello_user: {
    color: "#cfe38a",
    fontSize: 40,
    fontWeight: "600",
    justifyContent: "space-between",
    alignSelf: "center",
    width: "50%",
  },
});
