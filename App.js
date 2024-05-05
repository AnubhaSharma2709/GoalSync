import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoal] = useState([]);

  function goalInputhandler(enteredText){
    setEnteredGoalText(enteredText);
  }
  function addGoalHandler(){
    setCourseGoal(currentCourseGoals => [
      ...currentCourseGoals, 
      enteredGoalText,
    ]);
  }

  return (
    <View style={styles.appContainer}> 
      {/* The first nested view is for entering the goals */}
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder='Your Course Goal'
          style={styles.textInput}
          onChangeText={goalInputhandler}
        />
        <Button title="Add Goal"
        onPress={addGoalHandler} />
      </View>

      {/* The second nested view is for displaying those goals */}
      <View style={styles.goalContainer}>
        {courseGoals.map((goal) => <Text key={goal}>{goal}</Text>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex:1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems:'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  // Styling the text input
  textInput:{
    borderWidth: 1,
    borderColor:'#cccccc',
    width: '60%',
    marginRight: 8,
    padding: 8
  },
  goalContainer:{
    flex:6
  },
});
