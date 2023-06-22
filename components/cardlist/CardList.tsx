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

export default function CardList({ navigation }: CardListProps) {
  const [tags, setTags] = useState();
  const [cardList, setCardList] = useState([]);
  const [currentTag, setCurrentTag] = useState<ITag>();
  const [loading, setLoading] = useState(true);
  const [filterModalVisible, setFilterModalVisible] = useState(false);
  const [filters, setFilters] = useState([]);
  // const [filters, setFilters] = useState({  kcal: "",
  //   serve:"",
  //   grams: ""});

  const getCardsInfo = async () => {
    try {
      setLoading(true);
      const info = await recipesApi.getAllRecipesWithIngredientCollection();
      setCardList(info);
      setLoading(false);
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
      setLoading(true);
      const filteredList = await filtersApi.filtersByTags(tag);
      setCardList(filteredList);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleTagClick = (item: ITag) => {
    setCurrentTag(item);
  };

  const getCategories = async () => {
    try {
      setLoading(true);
      const tagsList = await categoryApi.getCategoriesOfRecipes();
      setTags(tagsList);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const getFilteredCardListByFiltersModal = async () => {
    try {
      setLoading(true);
      const filteredCardList = await filtersApi.filtersByFiltersForm(filters);
      // setFilters({  kcal: "",
      // serve:"",
      // grams: ""})
      setFilters([]);
      if (filteredCardList.length) {
        setCardList(filteredCardList);
      } else {
        setLoading(true);
      }
      setLoading(false);
    } catch (err) {
      console.log(err);
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
                // justifyContent: "center",
                alignSelf: "flex-start",
              }}
              source={"https://www.svgrepo.com/show/402888/waving-hand.svg"}
              // placeholder={blurhash}
              // contentFit="cover"
              // transition={1000}
            />
          </View>
        </View>
        {/* <View style={styles.user_photo}></View> */}
        <Image
          style={styles.user_photo}
          source={
            "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
          // placeholder={blurhash}
          // contentFit="cover"
          // transition={1000}
        />
      </View>

      <NavigateBar tags={tags} handleTagClick={handleTagClick} />
      {cardList.length && !loading ? (
        <View style={styles.container}>
          <View style={styles.filters_wrapper}>
            <Text style={styles.count_of_recipes}>
              {`${cardList.length} ${
                currentTag ? currentTag?.attributes.name : "All"
              }`}
            </Text>
            <Pressable onPress={toggleModal}>
              <Image
                style={{
                  width: 30,
                  height: 30,
                  // justifyContent: "center",
                }}
                source={
                  "https://www.svgrepo.com/show/425202/filter-market-ecommerce.svg"
                }
                // placeholder={blurhash}
                // contentFit="cover"
                // transition={1000}
              />
            </Pressable>
          </View>
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
                      options={item.attributes.small_extra_info.data.attributes}
                      imageUrl={item.attributes.image_url}
                      id={item.id}
                      key={index}
                    />
                  </Pressable>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
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
    // width: width,
  },
  hello: {
    textAlign: "left",
    color: textPrimary,
    fontSize: 20,
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
    alignItems:'center'
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
    width: 60,
    height: 60,
    borderRadius: 30,
    paddingVertical: 10,
  },
  hello_user: {
    color: textPrimary,
    fontSize: 20,
    fontWeight: "600",
    justifyContent: "space-between",
    alignSelf: "center",
    marginRight: 7,
  },
});
