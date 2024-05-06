import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

export default function AppHeader() {
  return (
    <View style={styles.appHeader}>
      <Image
        style={styles.headerImage}
        source={require('../assets/images/Back.png')} />
      <Image
        style={styles.logoImage}
        source={require('../assets/images/logo.png')} />
      <Image
        style={styles.headerImage}
        source={require('../assets/images/Anubha.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  appHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingBottom: 32,
  },
  headerImage: {
    width: 53,
    height: 53
  }, 
  logoImage: {
    width: 200,
    height: 53,
  }
});
