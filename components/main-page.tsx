import {  StyleSheet } from "react-native";
import CardList from "./cardlist/CardList";
import DetailedCard from "./detailed-card/DetailedCard";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { recipesApi } from "../api-requests/recipes-api";
import "react-native-gesture-handler";
import { Text} from "./Themed";
import Loader from "./loader/Loader";

export default function MainPage() {

  const Stack = createNativeStackNavigator();

  return (
    <>
      <NavigationContainer fallback={<Loader/>}>
        <Stack.Navigator
          screenOptions={{
            // headerMode: 'screen',
            // headerShown: false,
            headerTransparent: true,
            headerTintColor: "#cfe38a",
            headerStyle: { backgroundColor:"#11151E"},
          }}
        >
          <Stack.Screen name="General" options={{title:''}} >
            {(props) => <CardList {...props}  />}
          </Stack.Screen>

          <Stack.Screen name="Card" >
            {(props) => <DetailedCard {...props} />}
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
