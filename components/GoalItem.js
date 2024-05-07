import { View, StyleSheet , Text, Pressable } from "react-native";
function GoalItem(props) {

    return (
        <View style={styles.goalItem}>
        <Pressable 
        android_ripple={{color:'#210644'}}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({pressed}) => pressed && styles.pressedItem }
        >
          <Text style={styles.goaltext}>{props.text}</Text>
          </Pressable>
        </View>
      );
};
export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 10,
        borderRadius: 6,
        backgroundColor: "#EAFFF0",
      },
    pressedItem: {
        opacity:0.5,
    },
    goaltext: {
        color: "#333333",
        fontWeight: "800",
        padding: 18,
      },
});