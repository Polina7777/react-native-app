import { Pressable, StyleSheet } from "react-native";
import { View, Text } from "../../components/Themed";
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
import RecipeList from "../recipe-list/RecipeList";

export default function CardList({ navigation }: CardListProps) {
  const [tags, setTags] = useState<ITag[]>();
  const [cardList, setCardList] = useState<ICard[]>([]);
  const [currentTag, setCurrentTag] = useState<ITag>();
  const [loading, setLoading] = useState(true);
  const [filterModalVisible, setFilterModalVisible] = useState(false);
  const [filters, setFilters] = useState([]);
  const [favFilter, setFavFilter] = useState(false);
  const [error, setError] = useState(false);

  const getCardsInfo = async () => {
    setError(false);
    setLoading(true);
    setFavFilter(false);
    try {
      const info = await recipesApi.getAllRecipesWithIngredientCollection();
      setCardList(info);
    } catch (err) {
      setError(true);
      console.log(err);
    } finally {
      setLoading(false);
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
    setFavFilter(false);
    setError(false);
    setLoading(true);
    try {
      const filteredList = await filtersApi.filtersByTags(tag);
      setCardList(filteredList);
    } catch (err) {
      setError(true);
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const filterByFavorites = async (arr: number[]) => {
    setLoading(true);
    setFavFilter(true);
    setError(false);
    try {
      const user = await userApi.getUsersById("1");
      const filteredList = await favoritesApi.getFavorites(user.favorite.id);
      const idArr = filteredList.map((item: any) => item.id);
      const resultArray = [];
      for (const item of idArr) {
        const response = await fetch(
          `${url_ngrok}api/foods/${item}?populate=*`
        );
        const result = await response.json();
        resultArray.push(result.data);
      }
      setCardList(resultArray);
    } catch (error) {
      setError(true);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleTagClick = (item: ITag) => {
    setError(false);
    setFavFilter(false);
    setCurrentTag(item);
  };

  const getCategories = async () => {
    setLoading(true);
    setError(false);
    try {
      const tagsList = await categoryApi.getCategoriesOfRecipes();
      setTags(tagsList);
    } catch (err) {
      setError(true);
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const getFilteredCardListByFiltersModal = async () => {
    setLoading(true);
    setError(false);
    try {
      const filteredCardList = await filtersApi.filtersByFiltersForm(filters);
      setFilters([]);
      if (filteredCardList.length) {
        setCardList(filteredCardList);
      } else {
        setError(true);
      }
      setLoading(false);
    } catch (err) {
      setError(true);
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const toggleModal = () => {
    setFilterModalVisible(!filterModalVisible);
  };
  useEffect(() => {
    if (Object.keys(filters).length) {
      getFilteredCardListByFiltersModal();
    }
  }, [filters]);

  const numberTitle = () => {
    if (currentTag && !favFilter) {
      return `${currentTag?.attributes.name}`;
    } else if (favFilter) {
      return "Favorites";
    }
     else {
     return ("All");
    }
  };

  return (
    <View style={styles.card_list_wrapper}>
      <View style={styles.user_wrapper}>
        <View style={{ backgroundColor: backgroundPrimary, width: width / 2 }}>
          <Text style={styles.hello}>Hello,</Text>
          <View style={styles.hello_wrapper}>
            <Text style={styles.hello_user}> User!</Text>

            <Image
              style={{
                width: 30,
                height: 30,
                alignSelf: "flex-start",
              }}
              source={"https://www.svgrepo.com/show/402888/waving-hand.svg"}
            />
          </View>
        </View>
        <Image
          style={styles.user_photo}
          source={
            "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
          }
        />
      </View>

      <NavigateBar
        tags={tags}
        handleTagClick={handleTagClick}
        handleFavoritesClick={filterByFavorites}
      />

      {!loading ? (
        <View style={styles.container}>
          <View style={styles.filters_wrapper}>
            <Text style={styles.count_of_recipes}>
              {error ? null : `${cardList.length} ${numberTitle()}`}
            </Text>
            <Pressable onPress={toggleModal}>
              <Image
                style={{
                  width: 30,
                  height: 30,
                }}
                source={
                  "https://www.svgrepo.com/show/425202/filter-market-ecommerce.svg"
                }
              />
            </Pressable>
          </View>

          <RecipeList
            cardList={cardList}
            error={error}
            navigation={navigation}
          />
        </View>
      ) : (
        <Loader />
      )}
      {filterModalVisible ? (
        <FilterModal
          setFilters={setFilters}
          filterModalVisible={filterModalVisible}
          setFilterModalVisible={setFilterModalVisible}
        />
      ) : null}
    </View>
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
