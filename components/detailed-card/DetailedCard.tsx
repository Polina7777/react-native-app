import { ScrollView, StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";
import { ImageComponentDetailedCard } from "../image/ImageDetailed";
import Loader from "../loader/Loader";
import { ingredientsApi } from "../../api-requests/ingredients-api";
import { useEffect, useState } from "react";
import { widthScreen } from "../../constants/Sizes";

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
  const [extraInfo, setExtraInfo] = useState([]);
  console.log(extraInfo,'extra')
  const getIngredients = async () => {
    const extraInfoArray = [
      data.attributes.extra_info.data.attributes.min,
      data.attributes.extra_info.data.attributes.grams,
      data.attributes.extra_info.data.attributes.kcal,
      data.attributes.extra_info.data.attributes.serve,
    ];

    setExtraInfo(extraInfoArray);
    const ingredientCollectionId =
      data.attributes.ingredient_collection.data.id;
    try {
      const ingredientsList =
        await ingredientsApi.getIngredientCollectionByIdWithIngredients(
          ingredientCollectionId
        );
      setIngredients(ingredientsList.attributes.ingredients.data);
    } catch (err) {
      console.log(err);
      <Loader />;
    }
  };

  useEffect(() => {
    getIngredients();
  }, [data]);

  return data ? (
    <View style={styles.container}>
      <ScrollView style={styles.detailed_card_scroll__wrapper}>
        <ImageComponentDetailedCard urlImage={data.attributes.image_url} />
        {/* <View style={styles.info__wrapper}> */}
        <View style={styles.context__wrapper}>
          <View style={styles.extra_info__wrapper}>
            {extraInfo.map((item,index)=>{
              return <Text key={index} style={styles.extra_info__item}>
                {item}
              </Text>
            })}
          </View>
          <View style={styles.constituents__wrapper}>
            <ScrollView horizontal={true}>
              {ingredients.map((item, index) => {
                return (
                  <Text style={styles.constituents__item} key={index}>
                    {item.attributes.ingredient}
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
const { width } = widthScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#11151E",
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
    color: "#cfe38a",
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
    width: width - 40,
  },
  extra_info__wrapper:{
    backgroundColor: "transition",
    alignItems: "center",
    flexDirection: "row",
    width: width - 100,
    borderWidth: 1,
    borderColor: "#cfe38a",
    borderRadius: 25,
    paddingHorizontal: 25,
    paddingVertical: 25,
    justifyContent:'space-between',
    alignSelf:'center'
  
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
  extra_info__item:{
    fontSize: 15,
    color: "#cfe38a",
  width:width/9,
    // minWidth:43,
    textAlign:'center'
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
