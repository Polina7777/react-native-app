import React from "react";
import { Button, View, StyleSheet, Text } from "react-native";
import Modal from "react-native-modal";
import { widthScreen, heightScreen } from "../../constants/Sizes";
import {
  backgroundPrimary,
  borderColor,
  textPrimary,
} from "../../constants/Colors";
import { TextInput } from "react-native-gesture-handler";
import { Formik } from "formik";

const FilterModal = ({
  setFilters,
  setFilterModalVisible,
  filterModalVisible,
}) => {
  const submitPress = (values) => {
    setFilters(values);
    setFilterModalVisible(false);
    // filterRequest()
  };
  return (
    <View style={styles.container}>
      <Modal
        style={styles.modal}
        onBackdropPress={() => setFilterModalVisible(false)}
        isVisible={filterModalVisible}
      >
        <View style={styles.form_wrapper}>
          <View style={styles.form_container}>
            <Formik
              initialValues={{
                kcal: "",
                serve: "",
                grams: "",
              }}
              onSubmit={(values) => submitPress(values)}
            >
              {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View>
                  <View>
                    <Text style={styles.input_title}>Kcal:</Text>
                    <TextInput
                      style={styles.input}
                      onChangeText={handleChange("kcal")}
                      onBlur={handleBlur("kcal")}
                      value={values.kcal}
                    />
                  </View>
                  <View>
                    <Text style={styles.input_title}>Serve:</Text>
                    <TextInput
                      style={styles.input}
                      onChangeText={handleChange("serve")}
                      onBlur={handleBlur("serve")}
                      value={values.serve}
                    />
                  </View>
                  {/* <View>
                    <Text style={styles.input_title}>Time:</Text>
                    <Text style={styles.input_time}>from:</Text>
                    <TextInput
                      style={styles.input}
                      onChangeText={handleChange("timeFrom")}
                      onBlur={handleBlur("timeFrom")}
                      value={values.timeFrom}
                    />
                    <Text style={styles.input_time}>to:</Text>
                    <TextInput
                      style={styles.input}
                      onChangeText={handleChange("timeTo")}
                      onBlur={handleBlur("timeTo")}
                      value={values.timeTo}
                    />
                  </View> */}
                  {/* <View>
                    <Text style={styles.input_title}>Ingredient:</Text>
                    <TextInput
                      style={styles.input}
                      onChangeText={handleChange("ingredient")}
                      onBlur={handleBlur("ingredient")}
                      value={values.ingredient}
                    />
                  </View> */}
                     <View>
                    <Text style={styles.input_title}>Grams:</Text>
                    <TextInput
                      style={styles.input}
                      onChangeText={handleChange("grams")}
                      onBlur={handleBlur("grams")}
                      value={values.grams}
                    />
                  </View>
                  <Button
                    color={textPrimary}
                    onPress={() => handleSubmit()}
                    title="Submit"
                  />
                </View>
              )}
            </Formik>
          </View>
        </View>
      </Modal>
    </View>
  );
};
const { width } = widthScreen;
const { height } = heightScreen;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E6E6FA",
    alignItems: "center",
    width: width - 30,
  },
  modal: {
    paddingTop: height / 9,
    justifyContent: "flex-start",
  },
  form_wrapper: {
    alignItems: "center",
    height: height / 3.5,
  },
  form_container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: backgroundPrimary,
    borderWidth: 1,
    borderColor: borderColor,
    width: width - 40,
    borderRadius: 30,
    padding: 7,
  },
  input_title: {
    color: textPrimary,
    paddingVertical: 7,
    fontSize: 15,
  },
  input_time: {
    fontSize: 12,
    color: textPrimary,
    paddingVertical: 7,
  },
  input: {
    width: width - 100,
    borderRadius: 10,
    borderColor: borderColor,
    padding: 7,
    fontSize: 17,
    color: textPrimary,
    borderWidth: 0.5,
  },
});
export default FilterModal;
