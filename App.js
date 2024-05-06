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
import GoalInput from "./components/GoalInput";


export default function App() {
  const [modalIsVisible , setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoal] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endGoalHandler(){
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoal((currentCourseGoals) => [
      ...currentCourseGoals,
      {text: enteredGoalText,
        id: Math.random().toString()
      },
    ]);
    endGoalHandler();
  }

  function deleteGoalHandler(id){
    setCourseGoal(currentCourseGoals =>{
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }




  return (
    <View style={styles.appContainer}>
      <Button title="Add New Goal"  
      color="#C4A484"
      onPress={startAddGoalHandler}
      />
      <GoalInput visible={modalIsVisible}
      onAddGoal={addGoalHandler} 
      onCancel={endGoalHandler}
      />
      <View style={styles.goalContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return <GoalItem 
            text={itemData.item.text}
            id={itemData.item.id}
            onDeleteItem={deleteGoalHandler}
            />
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
  goalContainer: {
    flex: 6,
  },
});
