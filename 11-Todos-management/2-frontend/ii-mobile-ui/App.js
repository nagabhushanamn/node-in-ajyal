import React from 'react';
import { StyleSheet} from 'react-native';
import TodosView from './components/todos-view'


export default function App() {
  return (
    <TodosView />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: 50
  }
});
