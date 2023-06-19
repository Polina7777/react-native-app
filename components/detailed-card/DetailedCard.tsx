import { Dimensions, SafeAreaView, ScrollView, StyleSheet } from "react-native";

import { Text, View } from "../../components/Themed";
import { ImageComponentDetailedCard } from "../image/ImageDetailed";
import Loader from "../loader/Loader";

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
  return data ? (
    <View style={styles.container}>
              <ScrollView style={styles.detailed_card_scroll__wrapper}>
      <ImageComponentDetailedCard urlImage={data.attributes.image_url} />
      <View style={styles.info__wrapper}>
        <View style={styles.context__wrapper}>
          <View style={styles.detailed_description__wrapper}>
            {/* <SafeAreaView>
              <ScrollView> */}
                <Text style={styles.detail_description__item}>
                  {data.attributes.process}
                </Text>
              {/* </ScrollView>
            </SafeAreaView> */}
          </View>
        </View>
      </View>
      </ScrollView>
    </View>
  ) : <Loader/>;
}
const { width } = Dimensions.get("window");
const tag_width = width - 20;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  detailed_card_scroll__wrapper:{
  //  alignItems:'center',
  //  justifyContent:'center'
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
    width: tag_width,
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
    width: tag_width - 20,
    textAlign: "left",
    padding: 20,
  },
  detail_description__item: {
    color: "#D6FC51",
    paddingVertical: 10,
  },
});
