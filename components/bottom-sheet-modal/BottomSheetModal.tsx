import React, { useEffect, useState } from "react";
import { Button, StatusBar, StyleSheet, Text, View } from "react-native";
import Modal from "react-native-modal";
import { widthScreen, heightScreen } from "../../constants/Sizes";

function BottomModal({data}) {
  const [isModalVisible, setModalVisible] = useState(false);

  // const toggleModal = () => {
  //   setModalVisible(!isModalVisible);
  // };
useEffect(()=>{
setModalVisible(true)
},[])
  return (
    <View style={styles.flexView}>
      <StatusBar />
      {/* <View style={styles.btnContainer}>
        <Button title="Show Bottom Sheet" onPress={toggleModal} />
      </View> */}

      <Modal
        onBackdropPress={() => setModalVisible(false)}
        onBackButtonPress={() => setModalVisible(false)}
        isVisible={isModalVisible}
        swipeDirection="down"
        // onSwipeComplete={toggleModal}
        animationIn="bounceInUp"
        animationOut="bounceOutDown"
        animationInTiming={900}
        animationOutTiming={500}
        backdropTransitionInTiming={1000}
        backdropTransitionOutTiming={500}
        backdropColor='transition'
        style={styles.modal}
      >
        <View style={styles.modalContent}>
          <View style={styles.center}>
            <View style={styles.barIcon} />
            {/* {data} */}
             <Text style={styles.text}>{data}</Text>
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
    backgroundColor: "white",
  },
  modal: {
    justifyContent: "flex-end",
    marginHorizontal: 35,
  },
  modalContent: {
    // backgroundColor: "#11151E",
    backgroundColor:'transition',
    paddingTop: 12,
    paddingHorizontal: 30,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    minHeight: 400,
    maxHeight:height/3,
    paddingBottom: 20,
  },
  center: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
     paddingHorizontal:30
  },
  barIcon: {
    width: 60,
    height: 5,
    backgroundColor: "#bbb",
    borderRadius: 3,
  },
  text: {
    color: "#bbb",
    fontSize: 24,
    marginTop: 50,
  },
  btnContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 500,
  },
});