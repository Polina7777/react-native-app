import {
  ImageComponent,
  Pressable,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Text, View } from "../../components/Themed";
import { widthScreen } from "../../constants/Sizes";
import {
  backgroundPrimary,
  borderColor,
  textPrimary,
} from "../../constants/Colors";
import ImageIngredient from "../image/ImageIngredient";
import { Image } from "expo-image";

export interface NavigateBarProps {
  tags: any;
  handleTagClick: any;
}

export default function NavigateBar({
  tags,
  handleTagClick,
}: NavigateBarProps) {
  return tags ? (
    <View style={styles.navigate__wrapper}>
      <ScrollView horizontal={true} style={styles.scroll_view}>
        {tags.map((item, index: number) => {
          return (
            <TouchableOpacity key={item.id} style={styles.container}>
              <Pressable onPress={() => handleTagClick(item)}>
                {/* <Image  
                style={styles.image}
        source={item.attributes.image_url}
        // placeholder={blurhash}
        contentFit="cover"
        transition={1000}
        ></Image> */}
                <View style={styles.tag_wrappper}>
                  <ImageIngredient urlImage={item.attributes.image_url} size={20} />
                  <Text style={styles.navigate_tag}>
                    {item.attributes.name}
                  </Text>
                </View>
              </Pressable>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  ) : (
    <View></View>
  );
}

const { width } = widthScreen;
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  navigate_tag: {
    fontSize: 17,
    fontWeight: "bold",
    color: textPrimary,
    paddingLeft:7,
  },
  tag_wrappper:{
    flexDirection:'row',
alignItem:'center',
    textAlignVertical:'center',
    justifyContent:'center',
    minWidth: 120,
    borderWidth: 1,
    borderColor: borderColor,
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal:7,
    textAlign: "center",
    marginHorizontal: 7,
    backgroundColor: backgroundPrimary
  },

  navigate__wrapper: {},
  scroll_view: {
    backgroundColor: backgroundPrimary,
    width: width,
  },
});
