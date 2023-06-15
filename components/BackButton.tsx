
import * as React from 'react';
import { Button } from 'react-native';


function BackButton() {
  const navigation = useNavigation();

  return (
    <Button
      title="Back"
      onPress={() => {
        navigation.goBack();
      }}
    />
  );
}

export default BackButton;