import { View, StyleSheet , Text } from "react-native";
function GoalItem(props) {
    return (
        <View style={styles.goalItem}>
          <Text style={styles.goaltext}>{props.text}</Text>
        </View>
      );
};
export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: "#fafafa",
      },
    goaltext: {
        color: "#5C4033",
        fontWeight: "500",
        padding: 8,
      },
});