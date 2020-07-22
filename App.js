
import React from 'react';
import { StyleSheet, Text, SafeAreaView, View, Platform } from 'react-native';
import Header from './src/components/Header/index';
import TasksContainer from './src/components/TasksStore/TasksContainer'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      
   
      <TasksContainer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
    paddingLeft: 20,
    paddingRight: 20,

  },
});
