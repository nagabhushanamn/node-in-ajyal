import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, TouchableOpacity, ScrollView } from 'react-native';

export default function App() {
  let [todos, setTodos] = useState([])
  let [title, setTitle] = useState('')
  useEffect(async () => {
    let apiUrl = "http://192.168.1.50:3000/todos";
    let response = await fetch(apiUrl, { method: 'GET' })
    let todos = await response.json();
    setTodos(todos);
  }, [])
  const addNewTodo = async () => {
    console.log("adding new todo")
    let apiUrl = "http://192.168.1.50:3000/todos";
    let response = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: title })
    })
    let todo = response.json();
    todos = todos.concat(todo)
    setTodos(todos)
  } 
  return (
    <View>
      <Text style={styles.title}>Ajyal Todos</Text>
      <Text style={styles.todosCount}>total todos : {todos.length} </Text>

      <TextInput
        style={styles.newTodo}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="search"
        value={title}
        onChangeText={newTitle => setTitle(newTitle)}
      />
      <Button title="Add" onPress={() => addNewTodo()}></Button>
      <View>
        <ScrollView>
          <FlatList
            data={todos}
            keyExtractor={todo => "" + todo.id}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity>
                  <Text>{item.id}</Text>
                  <Text>{item.title}</Text>
                  <Text>{item.completed}</Text>
                </TouchableOpacity>
              )
            }}
          />
        </ScrollView>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  newTodo: {
    borderColor: 'black',
    borderWidth: 1,
  },
  title: {
    marginTop: 50,
    fontSize: 30,
    color: 'red'
  },
  todosCount: {
    borderRadius: 1,
    backgroundColor: '#DEF',
    color: '#000',
    margin: 20
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
