import {
  Pressable,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Card from "../../components/card/Card";
import React from "react";
import { heightScreen, widthScreen } from "../../constants/Sizes";
import { backgroundPrimary } from "../../constants/Colors";
import { ICard } from "../../interfaces";

import ErrorPage from "../error-page/Error-page";

export default function RecipeList({ cardList, navigation, error }: any) {
  if (error || !cardList.length) {
    return <ErrorPage />;
  }
  return (
    <ScrollView style={styles.scroll_wrapper}>
      {cardList.map((item: ICard) => {
        return (
          <TouchableOpacity key={item.id} style={styles.container}>
            <Pressable
              onPress={() => {
                navigation.navigate("Card", {
                  itemId: item.id,
                  title: item.attributes.title,
                });
              }}
            >
              <Card
                title={item.attributes.title}
                description={item.attributes.description}
                options={item.attributes.small_extra_info.data.attributes}
                imageUrl={item.attributes.image_url}
                id={item.id}
                key={item.id}
              />
            </Pressable>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}
const { width } = widthScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: backgroundPrimary,
    width: width,
  },

  scroll_wrapper: {
    flex: 1,
    backgroundColor: backgroundPrimary,
    width: width,
  },
});
