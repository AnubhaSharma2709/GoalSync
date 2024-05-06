import { useState } from 'react';
import { View,
    TextInput,
    Button,
    StyleSheet,
    Modal,
} from 'react-native';

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState("");

function goalInputhandler(enteredText) {
    setEnteredGoalText(enteredText);
}
    
function addGoalHandler(){
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
}

    return(
        <Modal visible={props.visible}
        animationType='slide'>
        <View style={styles.inputContainer}>
        <TextInput
          placeholder="Your Course Goal"
          style={styles.textInput}
          onChangeText={goalInputhandler}
          value={enteredGoalText}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      </Modal>
    );
};
export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: "#cccccc",
      },
      // Styling the text input
      textInput: {
        borderWidth: 1,
        borderColor: "#cccccc",
        width: "60%",
        marginRight: 8,
        padding: 8,
      },
});
