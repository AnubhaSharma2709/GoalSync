import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

export default function AppDec() {
  return(
    <View> 
    <View>
      <Text style={styles.headerText}>2 Big Challenges</Text>
      <Text style={styles.headersubtext}>Ambitious person aren't you?</Text>
    </View>
    <View style={styles.subBox}>

    <View>
      <View style={styles.boxStyle}>
      <Image
    style={styles.boxImageStyle}
    source={require('../assets/images/DSA.png')} />
        <Text style={styles.boxTextStyle}>DSA</Text>
        <Text style={styles.boxsubTextStyle}>Mastery of DSA in 6 Months</Text>
      </View>
      </View>

      <View>
      <View style={styles.boxStyle}>
      <Image
    style={styles.boxImageStyle}
    source={require('../assets/images/Development.png')} />
        <Text style={styles.boxTextStyle}>Development</Text>
        <Text style={styles.boxsubTextStyle}>Mastery of Development in 6 Months</Text>
      </View>
      </View>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
    headerText:{
      color: "#33BA57",
      fontSize: 26,
      fontWeight: "800",
      paddingBottom: 4,
    },
    headersubtext:{
      fontSize: 15,
      fontWeight: "600",
      paddingBottom: 4,
    },
    subBox:{
      flexDirection: "row",
      alignItems: "center",
    }, 
    boxStyle:{
      backgroundColor:"#EAFFF0",
      height: 200,
      padding: 12,
      borderRadius: 10,
      margin: 8,
      height: 220,
      width: 150,
      alignContent: "space-between",
    },
    boxTextStyle:{
      color: "#333333",
      fontSize: 18,
      fontWeight: "900",
      paddingBottom: 8,
      paddingTop: 10,
    },
    boxsubTextStyle: {
      color: "#333333",
      fontSize: 15,
      fontWeight: "500",
    },
    boxImageStyle:{
      width: 75,
      height: 75,
    }
  
  });
  