import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainPage from './components/main-page';

export default function App() {
  return (
    <View style={styles.container}>
      <MainPage/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
     flex: 1,
     width:'100%',
    backgroundColor: 'black',
    justifyContent: 'center',
  },
});
