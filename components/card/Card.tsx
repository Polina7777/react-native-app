import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import ImageComponent from '../image/Image';

export interface CardProps {
    title:string;
    description:string;
    options:any;
    imageUrl:any;
}
export default function Card({title,description,options,imageUrl}:CardProps) {
  return (
    <View style={styles.card__wrapper}>
     {/* <ImageComponent urlImage={imageUrl}/> */}
        <Text style={styles.title}>{title}</Text>
        <View style={styles.card_info__wrapper}>
            <View style={styles.options__wrapper}>
            {options.map((item,index) =>{
            return  <Text key={index} style={styles.option}>
                {item}
              </Text>
            })}
            </View>
            <Text style={styles.description}>
                {description}
            </Text>
        </View>
      {/* <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  card__wrapper: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 12,
    fontWeight: 'bold',
    // height:150,
    borderWidth:1,
    borderColor:'#D6FC51',
    color:'#D6FC51',
    backgroundColor:'#363333',
    borderRadius:10,
    paddingHorizontal:10,
    paddingVertical:3,
    textAlign:'center',
    marginVertical:5
  },
  title: {
    fontSize: 10,
    fontWeight: 'bold',
  },
  card_info__wrapper: {
   flexDirection:'column',
   backgroundColor:'transition'
  },
  options__wrapper: {
    backgroundColor:'transition',
    flexDirection:'row',
    gap:10,

   },
   option:{
    color:'#D6FC51',
    fontSize:10
   },
   description: {
    display:'flex',
   },
  separator: {
    // marginVertical: 30,
    // height: 1,
    // width: '80%',
  },
});