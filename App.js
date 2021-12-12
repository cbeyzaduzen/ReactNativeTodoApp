import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import Task from './components/Task';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        {/* TODAY TASK */}
        <View style={styles.taskWrapper}>

          <Text style={styles.sectionTitle}>Today's Tasks</Text>

          <View style={styles.items}></View>
          <Task text={"Task 1"} />
          <Task text={"Task 2"} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },

  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },

  sectionTitle: {
    fontSize:24,
    fontWeight:'bold',
  },

  items: {},
});
