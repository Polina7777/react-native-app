import { Dimensions, StyleSheet } from "react-native";
import CardList from "./cardlist/CardList";
import DetailedCard from "./detailed-card/DetailedCard";
import Card from "./card/Card";
import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SplashScreen, Stack } from "expo-router";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { recipesApi } from "../api-requests/recipes-api";
import "react-native-gesture-handler";
import { Text, View } from "./Themed";

// const { height } = Dimensions.get("window");
// const { width } = Dimensions.get("window");

const { height } = Dimensions.get("screen");
const { width } = Dimensions.get("screen");

const tag_width = width - 20;

export default function MainPage() {
  const [detailedCardInfo, setDetailedCardInfo] = useState();
  // const [cardList, setCardList] = useState([]);

  // const handleTagClick = () => {
  //   console.log("Tag click");
  // };

  // const getCardsInfo = async () => {
  //   try {
  //     const info = await recipesApi.getAllRecipes();
  //     setCardList(info);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useEffect(() => {
  //   getCardsInfo();
  // }, []);
  const cardClick = (id: string) => {
    // setShowDetailedCard(true);
    getDetailedCardInfo(id);
    // navigation.navigate('Card')
  };
  const getDetailedCardInfo = async (id: string) => {
    try {
      const info = await recipesApi.getRecipeById(id);
      setDetailedCardInfo(info);
    } catch (err) {
      console.log(err);
    }
  };

  const Stack = createNativeStackNavigator();

  return (
    // <View style={styles.main_page}>
      <>
    <NavigationContainer fallback={<Text>Loading...</Text>}>
    <Stack.Navigator 
      screenOptions={{
        // headerMode: 'screen',
        // headerShown: false,
        // headerTransparent: true,
        headerTintColor: "white",
        headerStyle: { backgroundColor: "tomato" },
      }} 
    >
      <Stack.Screen name="General">
        {(props) => <CardList {...props} handleClick={cardClick} />}
      </Stack.Screen>
       
      <Stack.Screen name="Card">
        {(props) => <DetailedCard {...props} data={detailedCardInfo} />}
      </Stack.Screen>
      
    </Stack.Navigator>
  
   
  </NavigationContainer>
  </>

  );
}
const styles = StyleSheet.create({
  main_page: {
  //  width:width,
    // marginTop:100,
    // flex: 1,
    // height:height,
    // alignItems: "center",
    // backgroundColor: "black",
  },
});
