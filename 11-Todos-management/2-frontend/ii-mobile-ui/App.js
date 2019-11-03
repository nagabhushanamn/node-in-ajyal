import React from 'react';
import { StyleSheet } from 'react-native';
import TodosView from './components/todos-view'

import store from './store';
import { Provider } from 'react-redux'

export default function App() {
  return (
    <Provider store={store}>
      <TodosView />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: 50
  }
});
