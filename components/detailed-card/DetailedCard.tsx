import { Button, ScrollView, StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";
import { ImageComponentDetailedCard } from "../image/ImageDetailed";
import Loader from "../loader/Loader";
import { ingredientsApi } from "../../api-requests/ingredients-api";
import { useEffect, useRef, useState } from "react";
import { widthScreen } from "../../constants/Sizes";
import { recipesApi } from "../../api-requests/recipes-api";
import BottomModal from "../bottom-sheet-modal/BottomSheetModal";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export interface IDetailedCardData {
  additionalInfo: string[];
  process: string;
  image_url: string;
  constituents: string[];
}
export interface DetailedCardProps {
  data: IDetailedCardData;
  navigation: any;
}

export default function DetailedCard({ navigation, route }: any) {
  const [ingredients, setIngredients] = useState([]);
  const [extraInfo, setExtraInfo] = useState<string[]>([]);
  const [recipe, setRecipe] = useState();

  const getDetailedCardInfo = async () => {
    try {
      const recipe = await recipesApi.getRecipeByIdWithIngredientCollection(
        route.params.itemId
      );
      const ingredients =
        await ingredientsApi.getIngredientCollectionByIdWithIngredients(
          recipe.attributes.ingredient_collection.data.id
        );

      const extraInfoArray = [
        recipe.attributes.extra_info.data.attributes.min,
        recipe.attributes.extra_info.data.attributes.grams,
        recipe.attributes.extra_info.data.attributes.kcal,
        recipe.attributes.extra_info.data.attributes.serve,
      ];

      setIngredients(ingredients.attributes.ingredients.data);
      setExtraInfo(extraInfoArray);
      setRecipe(recipe);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    navigation.setOptions({
      title: route.params.title,
    });
  }, [navigation]);

  useEffect(() => {
    getDetailedCardInfo();
  }, []);

  return recipe ? (
    <View style={styles.container}>
         
      <ScrollView>
        <ImageComponentDetailedCard urlImage={recipe.attributes.image_url} />
        <View style={styles.context__wrapper}>
          <View style={styles.extra_info__wrapper}>
            {extraInfo.map((item, index) => {
              return (
                <Text key={index} style={styles.extra_info__item}>
                  {item}
                </Text>
              );
            })}
          </View>
          <View style={styles.constituents__wrapper}>
            <ScrollView
              horizontal={true}
              centerContent={true}
              style={styles.scroll_wrapper}
            >
              {ingredients.map((item, index) => {
                return (
                  <Text style={styles.constituents__item} key={index}>
                    {item.attributes.ingredient}
                  </Text>
                );
              })}
            </ScrollView>
          </View>
          <BottomModal data={recipe.attributes.process}/>
          {/* <View style={styles.detailed_description__wrapper}>
            <Text style={styles.detail_description__item}>
              {recipe.attributes.process}
            </Text>
          </View> */}
        </View>
      </ScrollView>
  

    </View>
  ) : (
    <Loader />
  );
}
const { width } = widthScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#11151E",
    paddingTop:70
  },
  scroll_wrapper: {
    marginVertical: 20,
  },
  info__wrapper: {
    flexDirection: "column",

    backgroundColor: "transition",
    fontSize: 12,
    fontWeight: "bold",
    justifyContent: "center",
  },
  addition_info__wrapper: {
    justifyContent: "center",
    width: width,
  },
  additional_item: {
    color: "#cfe38a",
    padding: 10,
  },
  context__wrapper: {
    display: "flex",
    backgroundColor: "transition",
    justifyContent: "center",
  },
  constituents__wrapper: {
    backgroundColor: "transition",
    alignItems: "center",
    flexDirection: "row",
    width: width - 40,
    // alignSelf:'center',
    justifyContent: "center",
  },
  extra_info__wrapper: {
    backgroundColor: "transition",
    alignItems: "center",
    flexDirection: "row",
    width: width - 100,
    maxWidth: 450,
    borderWidth: 1,
    borderColor: "#cfe38a",
    borderRadius: 25,
    paddingHorizontal: 25,
    paddingVertical: 25,
    justifyContent: "space-between",
    alignSelf: "center",
  },
  constituents__item: {
    fontSize: 15,
    borderWidth: 1,
    borderColor: "#cfe38a",
    color: "#cfe38a",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    textAlign: "center",
    alignSelf: "center",
    width: 100,
    marginHorizontal: 5,
  },
  extra_info__item: {
    fontSize: 15,
    color: "#cfe38a",
    width: width / 9,
    textAlign: "center",
  },
  detailed_description__wrapper: {
    backgroundColor: "transition",
    borderWidth: 1,
    borderColor: "#cfe38a",
    color: "#cfe38a",
    borderRadius: 10,
    width: width - 40,
    textAlign: "left",
    padding: 20,
  },
  detail_description__item: {
    color: "#cfe38a",
    paddingVertical: 10,
  },
});
