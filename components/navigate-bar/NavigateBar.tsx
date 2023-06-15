import { Pressable, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';

export interface NavigateBarProps{
    tags:string[],
    handleTagClick:any
}

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
      {/* <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
    marginTop: 3,
  },
  navigate_tag: {
    fontSize: 21,
    fontWeight: 'bold',
    width:100,
    borderWidth:1,
    borderColor:'#D6FC51',
    color:'#D6FC51',
    borderRadius:10,
    paddingHorizontal:10,
    paddingVertical:3,
    textAlign:'center'
  },

  separator: {
    marginVertical: 10,
    height: 1,
    width: '80%',
  },
  navigate__wrapper: {
   flexDirection:'row',
   backgroundColor:'transition'
  },
});