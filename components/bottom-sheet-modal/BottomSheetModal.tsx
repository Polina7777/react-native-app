import React, { useEffect, useState } from "react";
import {
  Button,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Modal from "react-native-modal";
import { widthScreen, heightScreen } from "../../constants/Sizes";

function BottomModal({ data, ingredients}) {
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
            {/* <ScrollView
              horizontal={true}
              centerContent={true}
              style={styles.scroll_wrapper}
            > */}
            <View style={styles.constituents_wrapper}>
              {ingredients.map((item, index) => {
                return (
                  <Text style={styles.constituents__item} key={index}>
                    {item.attributes.ingredient}
                  </Text>
                );
              })}
            </View>
            {/* </ScrollView> */}
            <ScrollView>
              <TouchableOpacity>
                <Text style={styles.text}>{data}</Text>
              </TouchableOpacity>
            </ScrollView>
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
    justifyContent:'flex-end',
    marginHorizontal: 10,
    width: width - 20,
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#302137",
    borderRadius: 20,
    // borderTopLeftRadius: 20,
    minHeight: 300,
    maxHeight: height / 1.8,
    paddingVertical: 10,
    width: width - 30,
    alignSelf:'center',
    justifyContent:'flex-end'
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
  },
  btnContainer: {
    display: "flex",
    alignItems: 'flex-end',
    justifyContent: "center",
    height: height,
    // backgroundColor: "blue",
    width: width,
  },
  constituents__item: {
    fontSize: 11,
    borderWidth: 1,
    borderColor: "#cfe38a",
    color: "#cfe38a",
    borderRadius: 15,
    paddingHorizontal: 5,
    paddingVertical: 10,
    textAlign: "center",
    alignSelf: "center",
    width: 100,
    margin: 5,
  },
  constituents__wrapper: {
    backgroundColor: "transition",
    alignItems: "center",
    flexDirection: "row",
    // width: width - 40,
    justifyContent: "center",
    height: 30,
  },
});
