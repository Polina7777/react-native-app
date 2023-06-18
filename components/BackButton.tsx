
import * as React from 'react';
import { Button } from 'react-native';


function BackButton({handlePress}:any) {
  // const navigation = useNavigation();

  return (
    <Button
      title="Back"
      onPress={handlePress}
    />
  );
}

export default BackButton;