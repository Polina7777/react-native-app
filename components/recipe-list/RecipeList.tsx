import {
  Pressable,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { View, Text } from "../../components/Themed";
import Card from "../../components/card/Card";
import React, { useEffect, useState } from "react";
import NavigateBar from "../navigate-bar/NavigateBar";
import { recipesApi } from "../../api-requests/recipes-api";
import { categoryApi } from "../../api-requests/category-api";
import { filtersApi } from "../../api-requests/filters-api";
import { Image } from "expo-image";
import { heightScreen, widthScreen } from "../../constants/Sizes";
import Loader from "../loader/Loader";
import { backgroundPrimary, textPrimary } from "../../constants/Colors";
import FilterModal from "../filter_form/FilterModal";
import { CardListProps, ICard, ITag } from "../../interfaces";
import { favoritesApi } from "../../api-requests/favorites-api";
import { userApi } from "../../api-requests/user-api";
import { url_ngrok } from "../../api-requests";
import ErrorPage from "../error-page/Error-page";

export default function RecipeList({ cardList, navigation, error }: any) {
  if (error || !cardList.length) {
    return <ErrorPage />;
  }
  return (
    <ScrollView style={styles.scroll_wrapper}>
      {cardList.map((item: ICard) => {
        return (
          <TouchableOpacity key={item.id} style={styles.container}>
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
                options={item.attributes.small_extra_info.data.attributes}
                imageUrl={item.attributes.image_url}
                id={item.id}
                key={item.id}
              />
            </Pressable>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}
const { width } = widthScreen;
const { height } = heightScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: backgroundPrimary,
    width: width,
  },
  page_wrapper: {
    alignItems: "center",
  },
  hello_wrapper: {
    backgroundColor: backgroundPrimary,
    flexDirection: "row",
    alignSelf: "flex-start",
    flexWrap: "wrap",
  },
  hello: {
    textAlign: "left",
    color: textPrimary,
    fontSize: 23,
    fontWeight: "600",
    paddingLeft: 5,
  },
  filters_wrapper: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    width: width - 40,
    backgroundColor: backgroundPrimary,
  },
  scroll_wrapper: {
    flex: 1,
    backgroundColor: backgroundPrimary,
    width: width,
  },
  user_wrapper: {
    backgroundColor: backgroundPrimary,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    height: 150,
    maxHeight: 150,
    paddingTop: 20,
    alignItems: "center",
  },
  card_list_wrapper: {
    height: height,
  },
  count_of_recipes: {
    fontSize: 25,
    fontWeight: "600",
    color: textPrimary,
    alignSelf: "flex-start",
    padding: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  user_photo: {
    backgroundColor: textPrimary,
    width: 80,
    height: 80,
    borderRadius: 40,
    paddingVertical: 10,
  },
  hello_user: {
    color: textPrimary,
    fontSize: 23,
    fontWeight: "600",
    justifyContent: "space-between",
    alignSelf: "center",
    marginRight: 7,
  },
});
