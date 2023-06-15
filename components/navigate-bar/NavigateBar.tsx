import { Dimensions, Pressable, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';

export interface NavigateBarProps{
    tags:string[],
    handleTagClick:any
}
const { width } = Dimensions.get('window');
const box_count = 3;
const tag_width = width / box_count;

export default function NavigateBar({tags,handleTagClick}:NavigateBarProps) {
  return (
    <View style={styles.navigate__wrapper}>
   <ScrollView horizontal={true}>
       {tags.map((item,index)=>{
        return  <TouchableOpacity   key = {index}
        style = {styles.container}>
          <Pressable onPress={handleTagClick}>
        <Text  style={styles.navigate_tag}>{item}</Text>
        </Pressable>
        </TouchableOpacity>
       })}
       </ScrollView>
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
    marginTop: 3,
   alignSelf:'center'
  },
  navigate_tag: {
    fontSize: 21,
    fontWeight: 'bold',
    width:tag_width,
    borderWidth:1,
    borderColor:'#D6FC51',
    color:'#D6FC51',
    borderRadius:10,
    paddingHorizontal:10,
    paddingVertical:3,
    textAlign:'center'
  },

  navigate__wrapper: {
   flexDirection:'row',
   backgroundColor:'transition',
    marginHorizontal:10
  },
});