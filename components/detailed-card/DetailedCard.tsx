import { Dimensions, SafeAreaView, ScrollView, StyleSheet } from "react-native";

import { Text, View } from "../../components/Themed";
import { ImageComponentDetailedCard } from "../image/ImageDetailed";
import Loader from "../loader/Loader";
import { ingredientsApi } from "../../api-requests/ingredients-api";
import { useEffect, useState } from "react";


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

export default function DetailedCard({ data, navigation }: any) {
  const [ingredients, setIngredients] = useState([]);

  const getIngredients = async (data) => {
    console.log(data);
    console.log(data.attributes.ingredient_collection.data.id);
    const ingredientCollectionId =
      data.attributes.ingredient_collection.data.id;

    try {
      const ingredientsList =
        await ingredientsApi.getIngredientCollectionByIdWithIngredients(
          ingredientCollectionId
        );
      console.log(ingredientsList.attributes.ingredients.data);
      setIngredients(ingredientsList.attributes.ingredients.data);
    } catch (err) {
      console.log(err);
      <Loader />;
    }
  };
  useEffect(() => {
    getIngredients(data);
  }, [data]);
  return data ? (
    <View style={styles.container}>
      <ScrollView style={styles.detailed_card_scroll__wrapper}>
        <ImageComponentDetailedCard urlImage={data.attributes.image_url} />
        {/* <View style={styles.info__wrapper}> */}
        <View style={styles.context__wrapper}>
          <View style={styles.constituents__wrapper}>
            <ScrollView horizontal={true}>
              {ingredients.map((item, index) => {
                return (
                  <Text style={styles.constituents__item} key={index}>
                    {item.attributes.Ingredient}
                  </Text>
                );
              })}
            </ScrollView>
          </View>

          <View style={styles.detailed_description__wrapper}>
            <Text style={styles.detail_description__item}>
              {data.attributes.process}
            </Text>
          </View>
        </View>
        {/* </View> */}
      </ScrollView>
    </View>
  ) : (
    <Loader />
  );
}
const { width } = Dimensions.get("screen");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  detailed_card_scroll__wrapper: {
    //  alignItems:'center',
    //  justifyContent:'center'
  },
  info__wrapper: {
    flexDirection: "column",
    gap: 20,
    backgroundColor: "transition",
    fontSize: 12,
    fontWeight: "bold",
  },
  addition_info__wrapper: {
    flexDirection: "row",
    gap: 20,
    width: width,
  },
  additional_item: {
    color: "#D6FC51",
    padding: 10,
    gap: 20,
  },
  context__wrapper: {
    display: "flex",
    backgroundColor: "transition",
    gap: 10,
  },
  constituents__wrapper: {
    backgroundColor: "transition",
    alignItems: "center",
    flexDirection: "row",
    width: width-40,
  },
  constituents__item: {
    fontSize: 15,
    borderWidth: 1,
    borderColor: "#D6FC51",
    color: "#D6FC51",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    textAlign: "center",
    width: 100,
    marginHorizontal: 5,
  },
  detailed_description__wrapper: {
    backgroundColor: "transition",
    borderWidth: 1,
    borderColor: "#D6FC51",
    color: "#D6FC51",
    borderRadius: 10,
    width: width-40,
    textAlign: "left",
    padding: 20,
  },
  detail_description__item: {
    color: "#D6FC51",
    paddingVertical: 10,
  },
});
