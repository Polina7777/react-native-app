import * as React from 'react';
import { StyleSheet, View, Text, FlatList, ScrollViewComponent} from 'react-native';
import { ScrollView, TouchableOpacity, TouchableWithoutFeedback} from 'react-native-gesture-handler';
import StepIndicator from 'react-native-step-indicator';
import { textPrimary, textSecondary } from '../../constants/Colors';
import { heightScreen, widthScreen } from '../../constants/Sizes';
import { TouchableHighlight } from 'react-native';


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
  const [currentPage, setCurrentPage] = React.useState<number>(0);
  const viewabilityConfig = React.useRef({ itemVisiblePercentThreshold: 40 })
    .current;

  const renderPage = (rowData: any) => {
    const item = rowData.item;
    return (
       <TouchableHighlight>
      <View style={styles.rowItem}>
        <Text style={styles.title}>{item.attributes.name}</Text>
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

  return (
    <View style={styles.container}>
   
      <View style={{height:height/3,flexDirection:'row', width:width-20, padding:10}}>
      <View style={styles.stepIndicator}>

        <StepIndicator
          customStyles={stepIndicatorStyles}
          stepCount={data.length}
          direction="vertical"
          currentPosition={currentPage}
        />
      </View>
    
      <FlatList
        // style={{flexGrow:1}}
        data={data}
        renderItem={renderPage}
        onViewableItemsChanged={onViewableItemsChanged}
        // scrollEnabled={true}
        scrollToOverflowEnabled={true}
      />
   
      </View>
      
    </View>
  );
}
const {width} = widthScreen;
const {height} = heightScreen;
const styles = StyleSheet.create({
  container: {
      //  flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transition',
    paddingHorizontal:30,
     width:width-20,
  },
  stepIndicator: {
    // flex:1,
   paddingHorizontal:20,
  },
  rowItem: {
    paddingLeft:10,
    //  flex: 3,
    // paddingVertical: 10,
  },
  title: {
    flex: 1,
    fontSize: 15,
    color: textSecondary,
    paddingVertical: 20,
    fontWeight: '600',
  },
  body: {
     flex: 1,
    fontSize: 13,
    color: textSecondary,
     width:width/2,
    // lineHeight: 12,
    // marginRight: 8,
    marginBottom:10
  },
});