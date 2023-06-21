import React, { useEffect, useState } from "react";
import {
  Button,
  ImageBackground,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  // Image
} from "react-native";
import Modal from "react-native-modal";
import { widthScreen, heightScreen } from "../../constants/Sizes";
import {
  backgroundSecondary,
  borderColor,
  textPrimary,
} from "../../constants/Colors";
import ImageComponent from "../image/Image";
import ImageIngredient from "../image/ImageIngredient";
import { Image } from "expo-image";

function BottomModal({ data, ingredients }) {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  useEffect(() => {
    setModalVisible(true);
  }, []);

  return (
    <View style={styles.flexView}>
      {/* <StatusBar /> */}
      <Pressable onPress={toggleModal}>
        <View style={styles.btnContainer}>
          {/* <Button title="Show Bottom Sheet" onPress={toggleModal} /> */}
        </View>
      </Pressable>
      <Modal
        onBackdropPress={() => setModalVisible(false)}
        //  onBackButtonPress={() => setModalVisible(false)}
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
      >
        <View style={styles.modalContent}>
          <View style={styles.center}>
            <View style={styles.barIcon} />
            <TouchableOpacity>
              <ScrollView>
                <View style={styles.constituents_wrapper}>
                  {ingredients.map((item, index) => {
                    return (
                      // <Text style={styles.constituents__item} key={index}>
                      //   {item.attributes.ingredient}
                      // </Text>
                      <View key={item.id} style={styles.constituents__item}>
                        <Image
                          style={{
                            width: 30,
                            height: 30,
                            justifyContent: "center",
                          }}
                          source={item.attributes.image_url}
                          // placeholder={blurhash}
                          // contentFit="cover"
                          // transition={1000}
                        />
                      </View>
                    );
                  })}
                </View>

                <Text style={styles.text}>{data}</Text>
              </ScrollView>
            </TouchableOpacity>
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
    flex: 1,
    backgroundColor: "transition",
  },
  modal: {
    justifyContent: "flex-end",
    marginHorizontal: 10,
    width: width - 20,
    alignItems: "center",
    // height: height ,
    // position:'relative'
  },
  modalContent: {
    backgroundColor: backgroundSecondary,
    borderRadius: 20,
    // borderTopLeftRadius: 20,
    minHeight: 300,
    // maxHeight: height,
    paddingVertical: 10,
    width: width - 30,
    alignSelf: "center",
    // justifyContent: "flex-end",
    // justifyContent: "center",
    maxHeight: height/1.8 ,
    // position:'relative'
  },
  center: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    // position:'relative'
  },
  constituents_wrapper: {
    paddingTop: 10,
    flexWrap: "wrap",
    flexDirection: "row",
   justifyContent: "center",
    backgroundColor: backgroundSecondary,
    // width:width,
alignSelf:'center'
    // position:'absolute',

  },
  barIcon: {
    width: 40,
    height: 5,
    backgroundColor: "#bbb",
    borderRadius: 3,
  },
  text: {
    color: "#bbb",
    fontSize: 15,
    marginTop: 20,
    overflow: "scroll",
  },
  btnContainer: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    height: height,
    // backgroundColor: "blue",
    width: width,
  },
  constituents__item: {
    // fontSize: 11,
    // justifyContent: "center",
    borderWidth: 1,
    borderColor: borderColor,
    // color: textPrimary,
    // borderRadius: 15,
    // paddingHorizontal: 5,
    // paddingVertical: 10,
    // textAlign: "center",
    alignItems: "center",
    width: 50,
    margin: 5,
    height: 50,
    borderRadius: 25,
    padding: 7,
  },
});
