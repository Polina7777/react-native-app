import React, { useEffect, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import Modal from "react-native-modal";
import { widthScreen, heightScreen } from "../../constants/Sizes";
import { backgroundSecondary, borderColor } from "../../constants/Colors";
import { Image } from "expo-image";
import { IIngredient } from "../../interfaces";
import { TouchableHighlight } from "react-native";

import VerticalStepIndicator from "../slider/Slider";

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
            <View style={{}}>
              <VerticalStepIndicator data={data} />
            </View>
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
   // flex: 1,
    backgroundColor: "transition",
  },

  modal: {
    justifyContent: "flex-end",
    marginHorizontal: 10,
    width: width - 30,
    alignSelf: "center",
   // marginTop: height / 7,
    // height:height
  },
  modalContent: {
    backgroundColor: backgroundSecondary,
    borderRadius: 20,
    minHeight: height / 2,
    paddingVertical: 10,
    width: width - 30,
    alignSelf: "center",
   // maxHeight: height / 1.8,
    // height:height
    // overflowY:'scroll',
   // overflow:'scroll'
  },
  center: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  constituents_wrapper: {
    paddingTop: 10,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: backgroundSecondary,
    alignSelf: "center",
  },
  barIcon: {
    width: 40,
    height: 5,
    backgroundColor: "#bbb",
    borderRadius: 3,
  },
  text: {
    color: "#bbb",
    fontSize: 14,
    marginTop: 20,
    width: 170,
    // paddingHorizontal:10
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
