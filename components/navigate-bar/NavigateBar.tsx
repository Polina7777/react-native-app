import {
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

import { Image } from "expo-image";
import { ITag, NavigateBarProps } from "../../interfaces";

export default function NavigateBar({
  tags,
  handleTagClick,
  handleFavoritesClick
}: NavigateBarProps) {
  return tags ? (
    <View style={styles.navigate__wrapper}>
      <ScrollView horizontal={true} style={styles.scroll_view}>
        <Pressable onPress={() => handleFavoritesClick()}>
          <View style={styles.tag_wrappper}>
            <Image
              style={{ width: 20, height: 20, justifyContent: "center" }}
              source={
                "https://www.svgrepo.com/show/422454/heart-love-romantic.svg"
              }
            />
            <Text style={styles.navigate_tag}>Favorites</Text>
          </View>
        </Pressable>
        {tags.map((item: ITag) => {
          return (
            <TouchableOpacity key={item.id} style={styles.container}>
              <Pressable onPress={() => handleTagClick(item)}>
                <View style={styles.tag_wrappper}>
                  <Image
                    style={{ width: 20, height: 20, justifyContent: "center" }}
                    source={item.attributes.image_url}
                  />
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
    paddingLeft: 7,
  },
  tag_wrappper: {
    flexDirection: "row",
    alignItem: "center",
    textAlignVertical: "center",
    justifyContent: "center",
    minWidth: 120,
    borderWidth: 1,
    borderColor: borderColor,
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 7,
    textAlign: "center",
    marginHorizontal: 7,
    backgroundColor: backgroundPrimary,
  },

  navigate__wrapper: {},
  scroll_view: {
    backgroundColor: backgroundPrimary,
    width: width,
  },
});
