import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View } from "./Themed";
import NavigateBar from "./navigate-bar/NavigateBar";
import CardList from "./cardlist/CardList";
import DetailedCard from "./detailed-card/DetailedCard";
import Card from "./card/Card";
import { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import two from "../app/(tabs)/two";

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

const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();
export default function MainPage() {

  const [showDetailedCard, setShowDetailedCard] = useState(false);
  const navigation = useNavigation();
  const handleTagClick = () => {
    console.log("Tag click");
  };
  const cardClick = () => {
     setShowDetailedCard(true);
 
  };
  return (
    <View style={styles.main_page}>
     
      {showDetailedCard ? (
        <DetailedCard data={detailedCardInfo} />
      ) : (
        <View style={styles.main_page}>
        <NavigateBar tags={navigateTags} handleTagClick={handleTagClick} />
        <CardList cardList={cardList} handleCardPress={cardClick}  />
        </View>
      )}
{/* 
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      /> */}
      {/* <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
    </View>
  );
  {
    /* <View style={styles.main_page}>
<NavigateBar tags={navigateTags} handleTagClick={handleTagClick}/>
<Tab.Navigator>
<Tab.Screen name="Home">
  {(props) => <CardList {...props} cardList={cardList} />}

</Tab.Screen>
 <Tab.Screen name="Card">
  {(props) => <DetailedCard {...props} data={detailedCardInfo}/>}
 </Tab.Screen>
</Tab.Navigator>
</View> */
  }
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   backgroundColor:'black'
  // },
  main_page: {
    marginVertical: 30,
    // height:'100%'
    // width:'100%'
  },

  separator: {
    // marginVertical: 0,
    // height: 1,
    // width: '100%',
  },
});
