import * as React from 'react';
import { StyleSheet, View, Text, SafeAreaView} from 'react-native';
import { backgroundSecondary, textPrimary, textSecondary } from '../../constants/Colors';
import { heightScreen, widthScreen } from '../../constants/Sizes';
import { TouchableHighlight } from 'react-native';
import { useState } from 'react';
import Animated, {runOnJS, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';



export default function VerticalStepIndicator({data}:any) {
const translationY = useSharedValue(0)
const [currentIndex, setCurrentIndex] = useState(0)
 
React.useEffect(()=>{setCurrentIndex(0)},[])
    const stylez = useAnimatedStyle(() => {
      let heightOfSlider = translationY.value 
      return {
        height: heightOfSlider < 0 || heightOfSlider === 0? 0 : heightOfSlider+95,

      };
    });   
    const toggleIndex = (index: number) => {
      setCurrentIndex(index)
    }
    
    const scrollHandler = useAnimatedScrollHandler((event) => {
      translationY.value = event.contentOffset.y
      if (event.contentOffset.y < 50 && currentIndex != 0) {
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
    else if (event.contentOffset.y < 250 && currentIndex != 3) {
      runOnJS(toggleIndex)(3)
    }
    })
  return (
    <SafeAreaView>
    <View style={[styles.container]}>  
<Animated.View  style={[styles.general_sring,{height:data.lenght===1?180:0},stylez]}/>
 <Animated.View  style={[styles.string,{minHeight:180 * (data.length - 1 )- translationY.value}]}/>
      <Animated.ScrollView 
      style={[styles.scroll_view]}
        onScroll={scrollHandler}
        scrollEventThrottle={30}
        scrollToOverflowEnabled={true}
        alwaysBounceVertical={false}
        centerContent={true}
        disableIntervalMomentum={true}
        fadingEdgeLength={20}
      bounces={false}
      >
        {data.map((item:any,index:number)=>{
             return  <TouchableHighlight key={item.id}>
               <Animated.View style = {{width:300}} >
             <View style={[styles.rowItem]}>
               <View style = {styles.title_wrapper}>
               <View key={index+1} 
                style={[styles.step,{backgroundColor: translationY.value > 40 * index || index === 0 ? textPrimary : textSecondary}]}/>      
               <Text style={styles.title}>{item.attributes.name}</Text>
               </View>
               <Text style={styles.body}>{item.attributes.description}</Text>
             </View>
             </Animated.View>
            </TouchableHighlight> 
        })}
       </Animated.ScrollView>     
    </View>
    </SafeAreaView>
  );
}
const {width} = widthScreen;
const {height} = heightScreen;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'transition',
     position:'relative',
  },
  scroll_view:{
    borderLeftWidth:1,
    borderLeftColor:backgroundSecondary,
     height:height/3,
    width:width-100,
    marginHorizontal:10,
  },
  step:{
    width: 35,
    height: 35,
    borderWidth:5,
    borderRadius:17.5,
    justifyContent: "center",
    position:'absolute',
    left:-34,
    top:-35,
    color:textSecondary,
    borderColor:textPrimary
  },
  title_wrapper:{
    flexDirection:'row',
    position:'relative',
    zIndex:400,
    marginHorizontal:40,
  },
  rowItem: {
    flex:1,
     paddingTop:40,
     marginBottom:10,
     height:170,
  },
  title: {
    fontSize: 17,
    color: textSecondary,
    fontWeight: '600',
    paddingLeft:20
  },
  general_sring:{
  borderLeftWidth:2,
  borderLeftColor:textPrimary,
  position:'absolute',
  left:33,
  maxHeight:293,
  borderRadius:2
  },
  string:{
     borderLeftWidth:0.5,
      borderLeftColor:textSecondary,
      position:'absolute',
      left:34.5,
      top:5,
      paddingBottom:10,
      maxHeight:289,
      borderRadius:2
  },
  body: {
     flex:3,
    fontSize: 13,
    color: textSecondary,
     lineHeight: 20,
    paddingLeft:55,
    width:350,
    marginBottom:10,
  },
});