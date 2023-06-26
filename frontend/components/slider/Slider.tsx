import * as React from 'react';
import { StyleSheet, View, Text, FlatList, ScrollViewComponent} from 'react-native';
import { ScrollView, TouchableOpacity, TouchableWithoutFeedback} from 'react-native-gesture-handler';
import StepIndicator from 'react-native-step-indicator';
import { textPrimary, textSecondary } from '../../constants/Colors';
import { heightScreen, widthScreen } from '../../constants/Sizes';
import { TouchableHighlight } from 'react-native';
import { Image } from 'expo-image';
import { useState } from 'react';
import Animated, { useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';


const stepIndicatorStyles = {
  stepIndicatorSize: 35,
  currentStepIndicatorSize: 35,
  separatorStrokeWidth: 1,
  currentStepStrokeWidth: 5,
  stepStrokeCurrentColor: textPrimary,
  separatorFinishedColor: textPrimary,
  separatorUnFinishedColor: textSecondary,
  stepIndicatorFinishedColor: textPrimary,
  stepIndicatorUnFinishedColor: textSecondary,
  stepIndicatorCurrentColor: textSecondary,
  stepIndicatorLabelFontSize: 8,
  currentStepIndicatorLabelFontSize: 8,
  stepIndicatorLabelCurrentColor: textPrimary,
  stepIndicatorLabelFinishedColor: textPrimary,
  stepIndicatorLabelUnFinishedColor: textSecondary,
  // labelColor: '#666666',
  // labelSize: 15,
  currentStepLabelColor: textSecondary,
};

export default function VerticalStepIndicator({data}:any) {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [check, setCheck] = useState(false)
  const viewabilityConfig = React.useRef({ itemVisiblePercentThreshold: 40 })
    .current;

  const renderPage = (rowData: any) => {
  
    const item = rowData.item;
    return (
       <TouchableHighlight>
      <View style={styles.rowItem}>
        <View style = {{flexDirection:'row',position:'relative'}}>
      <Image  key={item.id}
                      style={{
                        width: 30,
                        height: 30,
                        justifyContent: "center",
                        position:'absolute',
                        left:-25,
                        top:10
                      }}
                      source={{
                        uri: check
                          ? item.attributes.check
                          : item.attributes.uncheck,
                      }}
                      />
                     
        <Text style={styles.title}>{item.attributes.name}</Text>
        </View>
        <Text style={styles.body}>{item.attributes.description}</Text>
      </View>
     </TouchableHighlight>  
    );
  };

  const onViewableItemsChanged = React.useCallback(({ viewableItems }:any) => {
    const visibleItemsCount = viewableItems.length;
    if (visibleItemsCount !== 0) {
      setCurrentPage(viewableItems[visibleItemsCount - 1].index);
    }
  }, []);


  // const handler = useAnimatedScrollHandler(
  //   {
  //     onEndDrag: (e) => {
  //       sv.value = state;
  //     },
  //   },
  //   dependencies
  // );
  const width = 135.5;

 

  const translationY = useSharedValue(0); 
  
  
  const scrollHandler = useAnimatedScrollHandler((event) => {
    translationY.value = event.contentOffset.y;
  });

  const stylez = useAnimatedStyle(() => {
    let heightOfSlider = translationY.value 

    return {
      height: heightOfSlider< 0 ? 0 : heightOfSlider
      // transform: [
      //   {
      //     translateY: translationY.value,
      //   },
      // ],
    };
  });

  return (
    <Animated.View style={[styles.container]}>
   
      {/* <View style={{height:height/3,flexDirection:'row', width:width-20, padding:10}}> */}
      {/* <View style={styles.stepIndicator}>

        <StepIndicator
          customStyles={stepIndicatorStyles}
          stepCount={data.length}
          direction="vertical"
          currentPosition={currentPage}
        />
      </View> */}
    
<Animated.View  style={[{ borderLeftWidth:4,
            borderLeftColor:'yellow',height:height/5},stylez]}/>
            
      <Animated.FlatList style={{ borderLeftWidth:4,
    borderLeftColor:'blue',height:height/3,paddingRight:10}}
        // style={{flexGrow:1}}
        onScroll={scrollHandler}
        data={data}
        renderItem={renderPage}
        onViewableItemsChanged={onViewableItemsChanged}
        // scrollEnabled={true}
        scrollToOverflowEnabled={true}
      />

 
      {/* </View> */}
      
    </Animated.View>
  );
}
const colorCheck = 'https://www.svgrepo.com/show/468260/check-circle.svg';
const uncheck = 'https://www.svgrepo.com/show/470763/check-circle.svg';
const {width} = widthScreen;
const {height} = heightScreen;
const styles = StyleSheet.create({
  container: {
      //  flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transition',
    paddingHorizontal:30,
     width:width-20,
     position:'relative',
     height:height/3
    
    
  },
  stepIndicator: {
    // flex:1,
  //  paddingHorizontal:20,
  },
  rowItem: {
    paddingLeft:10,
    alignItems:'flex-start'
    // borderLeftWidth:4,
    // borderLeftColor:'blue'
    //  flex: 3,
    // paddingVertical: 10,
  },
  title: {
    // flex: 1,
    fontSize: 15,
    color: textSecondary,
    paddingVertical: 20,
    fontWeight: '600',
  },
  body: {
    //  flex: 1,
    fontSize: 13,
    color: textSecondary,
     width:width-70,
    // lineHeight: 12,
    // marginRight: 8,
    marginBottom:10
  },
});