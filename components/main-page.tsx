import {  StyleSheet } from "react-native";
import CardList from "./cardlist/CardList";
import DetailedCard from "./detailed-card/DetailedCard";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { recipesApi } from "../api-requests/recipes-api";
import "react-native-gesture-handler";
import { Text} from "./Themed";

export default function MainPage() {
  const [detailedCardInfo, setDetailedCardInfo] = useState();

  const cardClick = (id: string) => {
    getDetailedCardInfo(id);
  };
  const getDetailedCardInfo = async (id: string) => {
    try {
      const info = await recipesApi.getRecipeByIdWithIngredientCollection(id);
      setDetailedCardInfo(info);
    } catch (err) {
      console.log(err);
    }
  };

  const Stack = createNativeStackNavigator();

  return (
    <>
      <NavigationContainer fallback={<Text>Loading...</Text>}>
        <Stack.Navigator
          screenOptions={{
            // headerMode: 'screen',
            // headerShown: false,
            // headerTransparent: true,
            headerTintColor: "#D6FC51",
            headerStyle: { backgroundColor: "black" },
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
