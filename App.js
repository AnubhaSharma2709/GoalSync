import { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import GoalItem from "./components/GoalItem";
export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoal] = useState([]);

  function goalInputhandler(enteredText) {
    setEnteredGoalText(enteredText);
  }
  function addGoalHandler() {
    setCourseGoal((currentCourseGoals) => [
      ...currentCourseGoals,
      {text: enteredGoalText,
        id: Math.random().toString()
      },
    ]);
  }

  return (
    <View style={styles.appContainer}>
      {/* The first nested view is for entering the goals */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Your Course Goal"
          style={styles.textInput}
          onChangeText={goalInputhandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>

      {/* The second nested view is for displaying those goals */}
      <View style={styles.goalContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text}/>
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
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
  goalContainer: {
    flex: 6,
  },
});
