import { Dimensions, StyleSheet } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View } from "./Themed";
import NavigateBar from "./navigate-bar/NavigateBar";
import CardList from "./cardlist/CardList";
import DetailedCard from "./detailed-card/DetailedCard";
import Card from "./card/Card";
import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Stack } from "expo-router";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { getAllRecipes } from "../api-requests/api-requests";
import { recipesApi } from "../api-requests/recipes-api";
// import { useNavigation } from '@react-navigation/native';

const navigateTags = ["Tag1", "Tag2", "Tag3"];

let cardList = [
  {
    title: "Card1",
    options: ["option1", "option2"],
    description: "description",
    imageUrl: "",
  },
  {
    title: "Card2",
    options: ["option1", "option2"],
    description: "description",
    imageUrl: "",
  },
  {
    title: "Card3",
    options: ["option1", "option2"],
    description: "description",
    imageUrl: "",
  },
  ,
  {
    title: "Card4",
    options: ["option1", "option2"],
    description: "description",
    imageUrl: "",
  },
  {
    title: "Card5",
    options: ["option1", "option2"],
    description: "description",
    imageUrl: "",
  },
  {
    title: "Card6",
    options: ["option1", "option2"],
    description: "description",
    imageUrl: "",
  },
  {
    title: "Card7",
    options: ["option1", "option2"],
    description: "description",
    imageUrl: "",
  },
];

export const detailedCardInfo = {
  additionalInfo: ["info1", "info2", "info3"],
  detailedDescription:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio consequatur, ab obcaecati ex vitae, nam, rerum molestiae deleniti aliquid soluta eaque officiis. Soluta velit fugiat veritatis facere dicta architecto id!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio consequatur, ab obcaecati ex vitae, nam, rerum molestiae deleniti aliquid soluta eaque officiis. Soluta velit fugiat veritatis facere dicta architecto id!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio consequatur, ab obcaecati ex vitae, nam, rerum molestiae deleniti aliquid soluta eaque officiis. Soluta velit fugiat veritatis facere dicta architecto id!",
  imageUrl: "",
  constituents: ["const1", "const2", "const3", "const4", "const5"],
};

export default function MainPage() {
  const [cardList, setCardList] = useState([]);

  const handleTagClick = () => {
    console.log("Tag click");
  };

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

  return (
    <View style={styles.main_page}>
      {/* {showDetailedCard ? (
        <DetailedCard data={detailedCardInfo} />
      ) : ( */}
      <View style={styles.main_page}>
        <CardList cardList={cardList} handleCardPress={handleTagClick} />
      </View>
  
    </View>
  );
}

const styles = StyleSheet.create({
  main_page: {
    marginVertical: 30,
    width: "100%",
    flex: 1,
    alignItems: "center",
    backgroundColor: "black",
  },
});
