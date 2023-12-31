import { Pressable, SafeAreaView, StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";
import { ImageComponentDetailedCard } from "../image/ImageDetailed";
import Loader from "../loader/Loader";
import { ingredientsApi } from "../../api-requests/ingredients-api";
import { useEffect, useState } from "react";
import { heightScreen, widthScreen } from "../../constants/Sizes";
import { recipesApi } from "../../api-requests/recipes-api";
import BottomModal from "../bottom-sheet-modal/BottomSheetModal";
import {
  backgroundPrimary,
  borderColor,
  textPrimary,
} from "../../constants/Colors";
import { IRecipe, IUser } from "../../interfaces";
import { Image } from "expo-image";
import { userApi } from "../../api-requests/user-api";
import { favoritesApi } from "../../api-requests/favorites-api";
import { processApi } from "../../api-requests/process-api";
import React from "react";

export default function DetailedCard({ navigation, route }: any) {
  const [ingredients, setIngredients] = useState([]);
  const [extraInfo, setExtraInfo] = useState<string[]>([]);
  const [process, setProcess] = useState();
  const [recipe, setRecipe] = useState<IRecipe>();
  const [likeClicked, setLikeClicked] = useState(false);
  const [userData, setUserData] = useState<IUser>();
  const [favoritesList, setFavoritesList] = useState<IRecipe[]>();
  const [checkComplite, setCheckComplite] = useState(false);

  const getDetailedCardInfo = async () => {
    try {
      const recipe = await recipesApi.getRecipeByIdWithIngredientCollection(
        route.params.itemId
      );
      const process = await processApi.getProcessByIdWithSteps(
        recipe.attributes.processing.data.id
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

      const user = await userApi.getUsersById("1");
      setIngredients(ingredients.attributes.ingredients.data);
      setExtraInfo(extraInfoArray);
      setRecipe(recipe);
      setProcess(process.attributes.process_steps.data);
      setUserData(user);
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

  useEffect(() => {
    getUsersFavoritesList();
  }, [userData]);

  const checkIsFavorite = (recipe: IRecipe) => {
    const check = favoritesList?.find((item: IRecipe) => recipe.id === item.id);
    setCheckComplite(true);
    check ? setLikeClicked(true) : setLikeClicked(false);
    return check;
  };

  const likeClick = () => {
    if (!recipe) return;
    const checkResult = checkIsFavorite(recipe);
    if (checkResult) {
      deleteFavorite();
    } else {
      addNewFavorite();
    }
  };

  const getUsersFavoritesList = async () => {
    if (userData && recipe) {
      try {
        const favorites = await favoritesApi.getFavorites(
          userData?.favorite.id
        );
        const check = favorites?.find((item: IRecipe) => recipe.id === item.id);
        check ? setLikeClicked(true) : setLikeClicked(false);
        setFavoritesList(favorites);
        setCheckComplite(true);
      } catch (err) {
        console.log(err);
      }
    }
  };

  const addNewFavorite = async () => {
    if (userData) {
      try {
        const favorite = await favoritesApi.setFavorite(
          userData.favorite.id,
          recipe
        );
        setLikeClicked(true);
        getUsersFavoritesList();
      } catch (err) {
        console.log(err, "error");
      }
    }
  };
  const deleteFavorite = async () => {
    try {
      if (userData) {
        const favorite = await favoritesApi.deleteFavorite(
          userData.favorite.id,
          recipe
        );
      }
      setLikeClicked(false);
      getUsersFavoritesList();
    } catch (err) {
      console.log(err);
    }
  };

  return recipe && checkComplite ? (
    <SafeAreaView>
    <View style={styles.container}>
      <Pressable onPress={likeClick}>
        <Image
          style={{
            width: 30,
            height: 30,
            position: "absolute",
            left: width / 2.8,
          }}
          source={{
            uri: !likeClicked
              ? "https://www.svgrepo.com/show/408364/heart-love-like-favorite.svg"
              : "https://www.svgrepo.com/show/422454/heart-love-romantic.svg",
          }}
        />
      </Pressable>
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
        <BottomModal
          data={process}
          ingredients={ingredients}
        />
      </View>
    </View>
    </SafeAreaView>
  ) : (
    <Loader />
  );
}
const { width } = widthScreen;
const { height } = heightScreen;
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: backgroundPrimary,
    height:height
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
    color: textPrimary,
    padding: 10,
  },
  context__wrapper: {
    backgroundColor: "transition",
    justifyContent: "center",
  
  },
  extra_info__wrapper: {
    backgroundColor: "transition",
    alignItems: "center",
    flexDirection: "row",
    width: width - 100,
    maxWidth: 450,
    borderWidth: 1,
    borderColor: borderColor,
    borderRadius: 25,
    paddingHorizontal: 25,
    paddingVertical: 20,
    justifyContent: "space-between",
    alignSelf: "center",
  },
  extra_info__item: {
    fontSize: 15,
    color: textPrimary,
    width: width / 9,
    textAlign: "center",
  },
  detailed_description__wrapper: {
    backgroundColor: "transition",
    borderWidth: 1,
    borderColor: borderColor,
    color: textPrimary,
    borderRadius: 10,
    width: width - 40,
    textAlign: "left",
    padding: 20,
  },
  detail_description__item: {
    color: textPrimary,
    paddingVertical: 10,
  },
});
