import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import { backgroundPrimary, textPrimary } from '../../constants/Colors';

const Loader = () => (
  <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator size="large" color={textPrimary} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: backgroundPrimary,
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default Loader;