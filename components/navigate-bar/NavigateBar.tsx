import {
  Pressable,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Text, View } from "../../components/Themed";
import { widthScreen } from "../../constants/Sizes";

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
            <TouchableOpacity key={index} style={styles.container}>
              <Pressable onPress={() => handleTagClick(item.id)}>
                <Text style={styles.navigate_tag}>{item.attributes.name}</Text>
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
    paddingTop: 20,
    alignItems: "center",
  },
  navigate_tag: {
    fontSize: 21,
    fontWeight: "bold",
    minWidth: 150,
    borderWidth: 1,
    borderColor: "#cfe38a",
    color: "#cfe38a",
    borderRadius: 10,
    paddingVertical: 3,
    textAlign: "center",
    marginHorizontal: 7,
  },

  navigate__wrapper: {},
  scroll_view: {
    backgroundColor: "#11151E",
    width: width,
  },
});
