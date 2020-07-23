
import React from 'react';
import { StyleSheet, Text, SafeAreaView, View, Platform } from 'react-native';
import { Provider } from 'react-redux';

import store from './src/redux/store';
import Header from './src/components/Header/index';
import TasksContainer from './src/components/TasksStore/TasksContainer';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <Header />
        <TasksContainer />
      </SafeAreaView>
    </Provider>
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
