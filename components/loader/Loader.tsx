import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

const Loader = () => (
  <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator size="large" color="#cfe38a" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: "#11151E",
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default Loader;