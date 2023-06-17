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
  // const [showDetailedCard, setShowDetailedCard] = useState(false);

  const handleTagClick = () => {
    console.log("Tag click");
  };

  const getCardInfo = async () =>{
    await fetch('http://localhost:1337/api/foods',{
      method:'GET',
    }).then((response) => {
      return response.json();
    })
    .then((data) => {
      setCardList(data.data)
      console.log(data.data,'data');
    })

 
  }

  // const getCardInfo = async () => {
  //   setCardList(await getAllRecipes());
  // };
  useEffect(() => {
    getCardInfo();
  }, []);

  return (
    <View style={styles.main_page}>
      {/* {showDetailedCard ? (
        <DetailedCard data={detailedCardInfo} />
      ) : ( */}
      <View style={styles.main_page}>
        <CardList cardList={cardList} handleCardPress={handleTagClick} />
      </View>
      {/* )} */}
      {/* <NavigationContainer>
      <Stack.Navigator>
      <NavigateBar tags={navigateTags} handleTagClick={handleTagClick} />
        <Stack.Screen name="Home">
        {(props) => <CardList {...props} cardList={cardList}  handleCardPress={cardClick} />}
          </Stack.Screen>
          <Stack.Screen name="Card">
        {(props) => <DetailedCard {...props} data={detailedCardInfo} />}
          </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer> */}
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
