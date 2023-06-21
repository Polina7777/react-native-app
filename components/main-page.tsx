import CardList from "./cardlist/CardList";
import DetailedCard from "./detailed-card/DetailedCard";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import "react-native-gesture-handler";
import Loader from "./loader/Loader";
import { backgroundPrimary, textPrimary } from "../constants/Colors";

export default function MainPage() {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <NavigationContainer fallback={<Loader />}>
        <Stack.Navigator
          screenOptions={{
            gestureEnabled:true,
            headerTransparent: false,
            headerTintColor: textPrimary,
            headerStyle: { backgroundColor: backgroundPrimary },
          }}
        >
          <Stack.Screen name="General" 
          options={{
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

