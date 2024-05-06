import { useState } from 'react';
import { View,
    TextInput,
    Button,
    StyleSheet,
    Modal,
    Image,

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
            <Image
            style={styles.image}
             source={require('../assets/images/Goals.png')} />
        <TextInput
          placeholder="Your Course Goal"
          style={styles.textInput}
          onChangeText={goalInputhandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
        <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} />
        </View>

        <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} />
        </View>

        </View>                                                          
      </View>
      </Modal>
    );
};
export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        borderBottomWidth: 1,
        backgroundColor: "#fffff7",
        borderColor: "#fffff7",
      },
      // Styling the text input
      textInput: {
        borderWidth: 1,
        borderColor: "#cccccc",
        width: "85%",
        marginRight: 8,
        padding: 8,
      },
      buttonContainer: {
        flexDirection: "row",
        marginTop: 16,
      },
      button: {
        width: '40%',
        marginHorizontal: 8
      },
      image: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        margin: 20
      }
});
