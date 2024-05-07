import { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image
} from "react-native";
import { StatusBar } from "expo-status-bar";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import AppHeader from "./components/AppHeader";
import AppDec from "./components/AppDec";


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
      <AppHeader />
      <AppDec />
      <View style={styles.planContainer}>
        <Text style={styles.planText}>Today's Planning</Text>
      <View style={styles.buttonStyles}> 
      <Button 
      title="Add New Goal"  
      color="#333333"
      onPress={startAddGoalHandler}
      />
      </View>
      </View>

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
  planContainer:{
    flexDirection: "row",
  },
  buttonStyles:{
    alignContent: "space-around",
    alignItems: "center",
    margin: 8,
  },
  planText: {
    paddingTop: 4,
    color: "#333333",
    fontSize: 21,
    fontWeight: "800",
    margin: 8
  }
});
