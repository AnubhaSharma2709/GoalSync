import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

export default function ProductivityText() {
  return(
    <View>
      <Text style={styles.headerText}>Add Your Goals</Text>
      <Text style={styles.headersubtext}> Ready to supercharge your productivity today?</Text>
    </View>
  );
}
const styles = StyleSheet.create({
    headerText:{
      color: "#33BA57",
      fontSize: 24,
      fontWeight: "800",
      paddingBottom: 4,
    },
    headersubtext:{
      fontSize: 14,
      fontWeight: "600",
      paddingBottom: 35,
    },  
  });
  