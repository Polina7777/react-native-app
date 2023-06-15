import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';

import { Text, View } from '../../components/Themed';
import ImageComponent from '../image/Image';
import BackButton from '../BackButton';

export interface IDetailedCardData {
    additionalInfo: string[],
    detailedDescription: string,
    imageUrl:string,
    constituents: string[]
}
export interface DetailedCardProps {
 data:IDetailedCardData
}
export default function DetailedCard({data}:DetailedCardProps) {
  return (
    <View style={styles.container}>
      {/* <BackButton/> */}
     {/* <ImageComponent urlImage={data.imageUrl}/> */}
    <View style={styles.info__wrapper}>
    <View style={styles.addition_info__wrapper}>
        {data.additionalInfo.map((item,index)=>{
         return <Text key={index} style={styles.additional_item}>{item}</Text>
        })}
        </View>
        <View style={styles.context__wrapper}>
            <View style={styles.constituents__wrapper}>
{data.constituents.map((item,index)=>{
    return <Text key={index} style={styles.constituent__item}>{item}</Text>
})}
            </View>
            <View style={styles.detailed_description__wrapper}>
            <SafeAreaView >
      <ScrollView>
              <Text style={styles.detail_description__item}>{data.detailedDescription}</Text> 
              </ScrollView> 
              </SafeAreaView>
            </View>
        </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap:20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'black'
  },
  info__wrapper: {
    flexDirection:'column',
    gap:20,
    backgroundColor:'transition',
    fontSize: 12,
    fontWeight: 'bold',
  },
  addition_info__wrapper: {
    flexDirection:'row',
    gap:20,
    backgroundColor:'transition',
    fontSize: 12,
    fontWeight: 'bold',
    borderWidth:1,
    borderColor:'#D6FC51',
    color:'#D6FC51',
    borderRadius:20,
    paddingHorizontal:10,
    paddingVertical:3,
    textAlign:'center'
  },
  additional_item: {
    color:'#D6FC51',
    padding:10,
    gap:20,
  },
  context__wrapper: {
    display:'flex',
    backgroundColor:'transition',
    alignItems: 'center',
    gap:10,
   },
   constituents__wrapper: {
   flexDirection:'row',
   backgroundColor:'transition',
   },
   constituent__item:{
    flexDirection:'row',
    gap:7,
    fontSize: 12,
    borderWidth:1,
    borderColor:'#D6FC51',
    color:'#D6FC51',
    borderRadius:10,
    paddingHorizontal:10,
    paddingVertical:3,
    textAlign:'center'
   },
   detailed_description__wrapper:{
    flexDirection:'row',
    gap:7,
    backgroundColor:'transition',
    fontSize: 12,
    borderWidth:1,
    borderColor:'#D6FC51',
    color:'#D6FC51',
    borderRadius:10,
    paddingHorizontal:10,
    paddingVertical:3,
    textAlign:'center'
   },
   detail_description__item:{
    color:'#D6FC51',
   }
});