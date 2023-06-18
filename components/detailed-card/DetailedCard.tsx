import { Dimensions, SafeAreaView, ScrollView, StyleSheet } from "react-native";

import { Text, View } from "../../components/Themed";
import ImageComponent from "../image/Image";
import BackButton from "../BackButton";

export interface IDetailedCardData {
  additionalInfo: string[];
  process: string;
  image_url: string;
  constituents: string[];
}
export interface DetailedCardProps {
  data: IDetailedCardData;
  navigation: any;
}
export default function DetailedCard({ data, navigation }: any) {
  return (
    data?
    <View style={styles.container}>
      {/* <BackButton handlePress={() => navigation.navigate("General")} /> */}
      <ImageComponent urlImage={data.attributes.image_url}/>
      <View style={styles.info__wrapper}>
        {/* <View style={styles.addition_info__wrapper}>
        {data.additionalInfo.map((item,index)=>{
         return <Text key={index} style={styles.additional_item}>{item}</Text>
        })}
        </View> */}
        <View style={styles.context__wrapper}>
          {/* <View style={styles.constituents__wrapper}>
{data.constituents.map((item,index)=>{
    return <Text key={index} style={styles.constituent__item}>{item}</Text>
})}
            </View> */}
          <View style={styles.detailed_description__wrapper}>
            <SafeAreaView>
              <ScrollView>
                <Text style={styles.detail_description__item}>{data.attributes.process}</Text> 
              </ScrollView>
            </SafeAreaView>
          </View>
        </View>
      </View>
    </View>:null
  );
}
const { width } = Dimensions.get("window");
const tag_width = width - 20;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // gap: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  info__wrapper: {
    flexDirection: "column",
    gap: 20,
    backgroundColor: "transition",
    fontSize: 12,
    fontWeight: "bold",
  },
  addition_info__wrapper: {
    flexDirection: "row",
    gap: 20,
    width:tag_width
  },
  additional_item: {
    color: "#D6FC51",
    padding: 10,
    gap: 20,
  },
  context__wrapper: {
    display: "flex",
    backgroundColor: "transition",
    gap: 10,
  },
  constituents__wrapper: {
    backgroundColor: "transition",
  },
  constituent__item: {
    gap: 7,
    fontSize: 12,
    borderWidth: 1,
    borderColor: "#D6FC51",
    color: "#D6FC51",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 3,
    textAlign: "center",
  },
  detailed_description__wrapper: {
    gap: 7,
    backgroundColor: "transition",
    borderWidth: 1,
    borderColor: "#D6FC51",
    color: "#D6FC51",
    borderRadius: 10,
    textAlign: "center",
    width:tag_width-20
  },
  detail_description__item: {
    color: "#D6FC51",
    paddingVertical:10
  },
});
