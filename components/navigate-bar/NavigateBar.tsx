import {
  Dimensions,
  Pressable,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Text, View } from "../../components/Themed";

export interface NavigateBarProps {
  tags: any;
  handleTagClick: any;
}
const { height } = Dimensions.get("screen");
const { width } = Dimensions.get("screen");
// const { width } = Dimensions.get('window');
const box_count = 3;
const tag_width = width / box_count;

export default function NavigateBar({
  tags,
  handleTagClick,
}: NavigateBarProps) {

  const handleAllTagClick =() =>{
    console.log('all')
  }


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
  ) : <View></View>;
}

const styles = StyleSheet.create({
  container: {
    paddingTop:20,
    alignItems:'center',
  },
  navigate_tag: {
    fontSize: 21,
    fontWeight: "bold",
    width: tag_width,
    borderWidth: 1,
    borderColor: "#D6FC51",
    color: "#D6FC51",
    borderRadius: 10,
    paddingVertical: 3,
    textAlign: "center",
    marginHorizontal: 7,
  },

  navigate__wrapper: {
    // backgroundColor: "transition",
    // alignContent: "center",
  },
  scroll_view: {
    backgroundColor: "black",
    width: width,
    // paddingVertical: 20,
  },
});
