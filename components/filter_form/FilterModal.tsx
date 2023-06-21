import React, { useEffect, useState} from 'react';
import {Button, View, StyleSheet,Text, Pressable} from 'react-native';
import Modal from 'react-native-modal';

import FilterForm from './FilterForm';
import { useEvent } from 'react-native-reanimated';
import { widthScreen, heightScreen } from '../../constants/Sizes';
import { useForm, SubmitHandler } from "react-hook-form";
import { backgroundPrimary, borderColor, textPrimary } from '../../constants/Colors';

const FilterModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  useEffect(()=>{
toggleModal()
  },[])
  interface IFormInput {
    kcal:string;
    serve:string;
    time:string;
    ingredient:string;
   }
 const { register, handleSubmit } = useForm<IFormInput>()
 const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)
  return (
    <View style={styles.container}>
      {/* <Button title="Click here to login" onPress={toggleModal} /> */}
      <Modal
       onBackdropPress={() => setIsModalVisible(false)}
    
        isVisible={isModalVisible}>
        <View style={styles.form_wrapper}>
        <View style={styles.form_container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <View>
          <Text style={styles.input_title}>Kcal:</Text>
          <input style={styles.input} type="text" placeholder="Kcal" {...register("kcal")}  />
        </View>
        <View>
          <Text style={styles.input_title}>Serve:</Text>
          <input style={styles.input} type="text" placeholder="Serve" {...register("serve")} />
        </View>
        <View>
          <Text style={styles.input_title}>Time:</Text>
          <input style={styles.input} type="text" placeholder="Mins" {...register("time")}  />
        </View>
        <View>
          <Text style={styles.input_title}>Ingredient:</Text>
          <input style={styles.input} type="text" placeholder="Ingredient"{...register("ingredient")}  />
        </View>
        <Pressable onPress={()=>setIsModalVisible(false)}>
        <input type="submit"/>
        </Pressable>
      </form>
    </View>
          {/* <FilterForm closeModal = {()=>setIsModalVisible(false) } /> */}
          {/* <View>
            <Button title="Hide modal" onPress={toggleModal} />
          </View> */}
        </View>
      </Modal>
    </View>
  );
};
const { width } = widthScreen;
const { height } = heightScreen;
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#E6E6FA',
    alignItems: 'center',
    justifyContent: 'center',
    width: width / 2,
    height:height/3
  },
  form_wrapper:{
    alignItems:'center'
  },
  form_container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: backgroundPrimary,
    borderColor: borderColor,
    width: width / 2,
    height: height / 3,
    padding: 20,
    paddingBottom:30,
    borderRadius:30
  },
  input_title: {
    color: textPrimary,
    paddingVertical:7,
    fontSize:15,
  },
  input:{
    width:width/3,
    borderRadius:10,
    padding:7,
  }
});
export default FilterModal;