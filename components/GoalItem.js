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
        margin: 8,
        borderRadius: 6,
        backgroundColor: "#fafafa",
      },
    pressedItem: {
        opacity:0.5,
    },
    goaltext: {
        color: "#5C4033",
        fontWeight: "500",
        padding: 16,
      },
});