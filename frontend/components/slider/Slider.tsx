import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import Animated from 'react-native-reanimated';
import RnVerticalSlider from 'rn-vertical-slider';
import { Ionicons } from '@expo/vector-icons';
import { heightScreen } from '../../constants/Sizes';
import { textPrimary, textSecondary } from '../../constants/Colors';

const renderIcon = (newVal: number) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const iconProps = React.useMemo(() => {
    let styles = {
      name: '',
      size: 30,
      color: '#FFFBF5',
    };
    if (newVal > 75) {
      styles.name = 'heart-circle-outline';
    } else if (newVal > 50) {
      styles.name = 'help-circle-outline';
    } else {
      styles.name = 'heart-dislike-circle-outline';
    }
    return styles;
  }, [newVal]);
  return (
    <View>
      <Animated.Text>
        {/* @ts-ignore */}
        <Ionicons {...iconProps} />
      </Animated.Text>
    </View>
  );
};

const SliderVertical: React.FC = ({position}:any) => {
 const [value, setValue] = React.useState(position);
  return (
    <View style={styles.container}>
      <RnVerticalSlider
        value={value}
        disabled={false}
        min={100}
        max={0}
          onChange={setValue}
        onComplete={(newValue: number) => {
          console.log('COMPLETE', newValue);
        } }
        width={10}
        height={height / 2.2}
        step={2}
        showBackgroundShadow={false}
        borderRadius={5}
        maximumTrackTintColor={textPrimary}
        minimumTrackTintColor={textSecondary}
        showBallIndicator
        renderIndicator={renderIcon}
        ballIndicatorWidth={50}
        ballIndicatorHeight={50}
        ballIndicatorPosition={-20}
        ballIndicatorColor={'gray'}
        ballIndicatorTextColor={'white'} 
            />
    </View>
  );
};

export default SliderVertical;
const { height } = heightScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft:10,
    paddingRight:30,
    alignContent:'flex-start',
  
  },
});
