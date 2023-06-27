import * as React from 'react';
import { StyleSheet, View, Text, FlatList, ScrollViewComponent, ImageBackground} from 'react-native';
import { ScrollView, TouchableOpacity, TouchableWithoutFeedback} from 'react-native-gesture-handler';
import StepIndicator from 'react-native-step-indicator';
import { backgroundSecondary, textPrimary, textSecondary } from '../../constants/Colors';
import { heightScreen, widthScreen } from '../../constants/Sizes';
import { TouchableHighlight } from 'react-native';
import { Image } from 'expo-image';
import { useState } from 'react';
import Animated, { event, runOnJS, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';





export default function VerticalStepIndicator({data}:any) {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [scrollHeight,setScrollHeight] = useState(0)
const translationY = useSharedValue(0)
  // const scrollHeightValue  = useSharedValue(getInitialValue())
  const viewabilityConfig = React.useRef({ itemVisiblePercentThreshold: 40 })
    .current;
 

    const stylez = useAnimatedStyle(() => {
      let heightOfSlider = translationY.value 
      return {
        height: heightOfSlider < 0 ? 0 : heightOfSlider,
        maxHeight:300,
        borderLeftColor:textPrimary,
  
      
      };
    });
    const [currentIndex, setCurrentIndex] = useState(0)

    const toggleIndex = (index: number) => {
      setCurrentIndex(index)
    }
    
    const scrollHandler = useAnimatedScrollHandler((event) => {
      translationY.value = event.contentOffset.y
      if (event.contentOffset.x < 50 && currentIndex != 0) {
        runOnJS(toggleIndex)(0)
      } else if (
        event.contentOffset.y > 50 &&
        event.contentOffset.y < 100 &&
        currentIndex != 1
      ) {
        runOnJS(toggleIndex)(1)
      } else if (event.contentOffset.y > 100 && currentIndex != 2) {
        runOnJS(toggleIndex)(2)
      }
    })


  const onViewableItemsChanged = React.useCallback(({ viewableItems }:any) => {
    const visibleItemsCount = viewableItems.length;
    if (visibleItemsCount !== 0) {
      setCurrentPage(viewableItems[visibleItemsCount - 1].index);
    }
  }, []);

  return (
    <Animated.View style={[styles.container]}>  
<Animated.View  style={[{ borderLeftWidth:3,
            borderLeftColor:backgroundSecondary,height:height/8,position:'absolute',left:33},stylez]}>
              </Animated.View>
            <Animated.ScrollView 
      style={{ borderLeftWidth:1,
    borderLeftColor:backgroundSecondary,height:height/3,width:width-100,marginHorizontal:10}}
        // style={{flexGrow:1}}
        onScroll={scrollHandler}
        scrollEventThrottle={30}
        scrollToOverflowEnabled={false}
        alwaysBounceVertical={true}
        centerContent={true}
        disableIntervalMomentum={true}
        fadingEdgeLength={20}
      >
        {data.map((item,index)=>{
             return  <TouchableHighlight key={item.id}>
               <Animated.View style = {{width:width,paddingHorizontal:20}} >
             <View style={styles.rowItem}>
               <View style = {{flexDirection:'row',position:'relative',zIndex:400,marginHorizontal:30, }}>
                                <View key={index+1} 
                             style={[{
                               width: 35,
                               height: 35,
                               borderWidth:1,
                               borderRadius:17.5,
                               justifyContent: "center",
                               backgroundColor: translationY.value > 50 * index? textPrimary : textSecondary,
                               position:'absolute',
                               left:-44,
                               top:-15,
                               zIndex:1000,
                             }]}
                             />
                             
                            
               <Text style={styles.title}>{item.attributes.name}</Text>
               </View>
               <Text style={styles.body}>{item.attributes.description}</Text>
             </View>
             </Animated.View>
            </TouchableHighlight> 
        })}
       </Animated.ScrollView>
      
    </Animated.View>
  );
}
const colorCheck = 'https://www.svgrepo.com/show/468260/check-circle.svg';
const uncheck = 'https://www.svgrepo.com/show/470763/check-circle.svg';
const {width} = widthScreen;
const {height} = heightScreen;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'transition',
     position:'relative',
     height:height/2.6,
  },

  rowItem: {
    alignItems:'flex-start',
    //  flex: 3,
    width:200,
     paddingVertical: 20,
     zIndex:2000
  },
  title: {
    // flex: 1,
    fontSize: 15,
    color: textSecondary,
    fontWeight: '600',
    paddingLeft:20

  },
  body: {
    fontSize: 13,
    color: textSecondary,
     width:width-70,
     lineHeight: 30,
   paddingLeft:45,
    marginBottom:10
  },
});