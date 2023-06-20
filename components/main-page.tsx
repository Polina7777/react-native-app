import { StyleSheet } from "react-native";
import CardList from "./cardlist/CardList";
import DetailedCard from "./detailed-card/DetailedCard";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { recipesApi } from "../api-requests/recipes-api";
import "react-native-gesture-handler";
import { Text } from "./Themed";
import Loader from "./loader/Loader";
import { backgroundPrimary, textPrimary } from "../constants/Colors";

export default function MainPage() {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <NavigationContainer fallback={<Loader />}>
        <Stack.Navigator
          screenOptions={{
          //  headerMode: 'screen',
            // headerShown: false,
            // headerTransparent: true,
            gestureEnabled:true,
            headerTransparent: false,
            headerTintColor: textPrimary,
            headerStyle: { backgroundColor: backgroundPrimary },
          }}
        >
          <Stack.Screen name="General" 
          options={{ title: "knknkk" ,
        headerShown:false}}
          >
            {(props) => <CardList {...props} />}
          </Stack.Screen>

          <Stack.Screen
            name="Card"
            options={{
              headerLeft: () => null,
            }}
          >
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
