// import React from 'react';
// import { View } from 'react-native';
// import Animated, {
//     useSharedValue,
//     useAnimatedStyle,
//     useAnimatedScrollHandler,
//   } from 'react-native-reanimated';
  
//   function ScrollExample() {
//     const translationY = useSharedValue(0);
  
//     const scrollHandler = useAnimatedScrollHandler((event) => {
//       translationY.value = event.contentOffset.y;
//     });
  
//     const stylez = useAnimatedStyle(() => {
//       return {
//         transform: [
//           {
//             translateY: translationY.value,
//           },
//         ],
//       };
//     });
  
//     return (
//       <View style={styles.container}>
//         <Animated.View style={[styles.box, stylez]} />
//         <Animated.ScrollView
//           style={styles.scroll}
//           onScroll={scrollHandler}>
//           <Content />
//           </Animated.ScrollView>
//       </View>
//     );
//   }






// import React, { useEffect, useState } from "react";
// import {
//   Animated,
//   FlatList,
//   Pressable,
//   SafeAreaView,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from "react-native";
// import Modal from "react-native-modal";
// import { widthScreen, heightScreen } from "../../constants/Sizes";
// import {
//   backgroundSecondary,
//   borderColor,
//   textPrimary,
//   textSecondary,
// } from "../../constants/Colors";
// import { Image } from "expo-image";
// import { IIngredient } from "../../interfaces";
// import { TouchableHighlight } from "react-native";
// import { Slider } from "@rneui/themed/dist/Slider";
// import SliderVertical from "../slider/Slider";

// function BottomModal({ data, ingredients }: any) {
//   const [isModalVisible, setModalVisible] = useState(false);
//   const [yScroll, setYScroll] = useState(0);

//   const toggleModal = () => {
//     setModalVisible(!isModalVisible);
//   };
//   useEffect(() => {
//     setModalVisible(true);
//   }, []);
//   const handleScroll = (event) => {
//     // const positionX = event.nativeEvent.contentOffset.x;
//     const positionY = event.nativeEvent.contentOffset.y;
//     // console.log(positionX,'X')
//     console.log(positionY, "Y");
//   };

//   return (
//     <View style={styles.flexView}>
//       <Pressable onPress={toggleModal}>
//         <View style={styles.btnContainer}></View>
//       </Pressable>
//       <Modal
//         onBackdropPress={() => setModalVisible(false)}
//         onBackButtonPress={() => setModalVisible(false)}
//         isVisible={isModalVisible}
//         swipeDirection="down"
//         // onSwipeComplete={toggleModal}
//         animationIn="bounceInUp"
//         animationOut="bounceOutDown"
//         animationInTiming={900}
//         animationOutTiming={500}
//         backdropTransitionInTiming={1000}
//         backdropTransitionOutTiming={500}
//         backdropColor="transition"
//         style={styles.modal}
//         propagateSwipe={true}
//       >
//         <View style={styles.modalContent}>
//           <View style={styles.center}>
//             <View style={styles.barIcon} />

//             <View style={styles.constituents_wrapper}>
//               {ingredients.map((item: IIngredient) => {
//                 return (
//                   <View key={item.id} style={styles.constituents__item}>
//                     <Image
//                       style={{
//                         width: 30,
//                         height: 30,
//                         justifyContent: "center",
//                       }}
//                       source={item.attributes.image_url}
//                     />
//                   </View>
//                 );
//               })}
//             </View>

//             <View style={{ flexDirection: "row", width: width - 40 }}>
//               {/* <View
//                 style={{
//                   flexDirection: "row",
//                   justifyContent: "space-between",
//                   overflow: "scroll",
//                 }}
//               > */}
//                 {/* <SliderVertical/> */}
//                 <ScrollView
              
//                   //  scrollEventThrottle={16}
//                   onScroll={handleScroll}
//                 >
//                   {/* <TouchableHighlight> */}
//                     {/* <TouchableOpacity> */}
//                       <Text style={styles.text}>{data}</Text>
//                     {/* </TouchableOpacity> */}
//                   {/* </TouchableHighlight> */}
//                 </ScrollView>
//               </View>
//             </View>
//           </View>
//         {/* </View> */}
//         {/* </View> */}
//       </Modal>
//     </View>
//   );
// }

// export default BottomModal;