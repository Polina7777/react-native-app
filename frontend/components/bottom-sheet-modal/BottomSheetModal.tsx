import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, TouchableHighlight, View } from "react-native";
import Modal from "react-native-modal";
import { widthScreen, heightScreen } from "../../constants/Sizes";
import { backgroundSecondary, borderColor } from "../../constants/Colors";
import { Image } from "expo-image";
import { IIngredient } from "../../interfaces";

import VerticalStepIndicator from "../slider/Slider";
import { ScrollView } from "react-native-gesture-handler";

function BottomModal({ data, ingredients }: any) {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  useEffect(() => {
    setModalVisible(true);
  }, []);
  return (
    <View style={styles.flexView}>
      <Pressable onPress={toggleModal}>
        <View style={styles.btnContainer}></View>
      </Pressable>
      <Modal
        onBackdropPress={() => setModalVisible(false)}
        onBackButtonPress={() => setModalVisible(false)}
        isVisible={isModalVisible}
        swipeDirection="down"
        onSwipeComplete={toggleModal}
        animationIn="bounceInUp"
        animationOut="bounceOutDown"
        animationInTiming={900}
        animationOutTiming={500}
        backdropTransitionInTiming={1000}
        backdropTransitionOutTiming={500}
        backdropColor="transition"
        style={styles.modal}
        propagateSwipe={true}
      >
        <View style={styles.modalContent}>
          <View style={styles.center}>
            <View style={styles.barIcon} />

            <View style={styles.constituents_wrapper}>
              {ingredients.map((item: IIngredient) => {
                return (
                  <View key={item.id} style={styles.constituents__item}>
                    <Image
                      style={{
                        width: 30,
                        height: 30,
                        justifyContent: "center",
                      }}
                      source={item.attributes.image_url}
                    />
                  </View>
                );
              })}
            </View>
              <VerticalStepIndicator data={data} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default BottomModal;

const { width } = widthScreen;
const { height } = heightScreen;
const styles = StyleSheet.create({
  flexView: {
    backgroundColor: "transition",
    width:width-20,
    height:height/2.2
  },

  modal: {
    justifyContent: "flex-end",
    marginHorizontal: 10,
    width: width - 30,
    alignSelf: "center",
     height:height/2.2,
    paddingVTop:10
  },
  modalContent: {
    backgroundColor: backgroundSecondary,
    borderRadius: 20,
    paddingVertical: 10,
    width: width - 30,
    alignSelf: "center",
     height:height/2

  },
  center: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  constituents_wrapper: {
    paddingTop: 10,
    flexWrap: "wrap",
    flexDirection: "row",
     justifyContent: "center",
     alignSelf: "center",

  },
  barIcon: {
    width: 40,
    height: 5,
    backgroundColor: "#bbb",
    borderRadius: 3,
  },
  btnContainer: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    height: height,
    width: width,
  },
  constituents__item: {
    borderWidth: 1,
    borderColor: borderColor,
    alignItems: "center",
    width: 50,
    margin: 5,
    height: 50,
    borderRadius: 25,
    padding: 7,
  },
});
