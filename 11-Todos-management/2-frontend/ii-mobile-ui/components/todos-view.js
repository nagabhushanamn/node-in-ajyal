import React, { useEffect, useState } from 'react';
import TodoInput from './todo-input'
import { View, Text, ScrollView, List, FlatList, StyleSheet } from 'react-native'

import { Card, ListItem, Button, Icon, Divider } from 'react-native-elements'


const TodosView = (props) => {

    let [todos, setTodos] = useState([])  // all todos
    let [todo, setTodo] = useState({ title: '' }) // current todo
    let [isEditing, setEditing] = useState(false) // is editing

    useEffect(() => {
        getTodos();
    }, [])

    const getTodos = async () => {
        let response = await fetch('http://192.168.1.182:3000/todos', {
            method: 'GET'
        })
        let todos = await response.json()
        setTodos(todos);  // diffing
    }
    const saveNewTodo = async (title, id) => {
        let response = await fetch(`http://192.168.1.182:3000/todos/${id ? id : ''}`, {
            method: isEditing ? 'PUT' : 'POST',// POST
            headers: {
                'Content-Type': 'application/json' // json
            },
            body: JSON.stringify({ title })
        })
        let todo = await response.json()
        if (!isEditing)
            //setTodos(todos.concat(todo)); // diffing on Virtual DOM
            getTodos();
        else {
            todos = todos.map(todo => {
                if (todo.id === id)
                    todo.title = title
                return todo;
            })
            setTodos(todos)
        }
    }

    const deleteTodo = async id => {
        let response = await fetch('http://localhost:3000/todos/' + id, {
            method: 'DELETE',
        })
        let status = await response.json()
        if (status.count === 1)
            todos = todos.filter(todo => todo.id !== id)
        setTodos(todos);
    }

    const editTodo = async id => {
        let response = await fetch('http://localhost:3000/todos/' + id, {
            method: 'GET',
        })
        let todo = await response.json()
        setTodo(todo)
        setEditing(true)
    }

    const completedTodo = async id => {
        let response = await fetch(`http://localhost:3000/todos/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ action: 'complete' })
        })
        await response.json()
        todos = todos.map(todo => {
            if (todo.id === id)
                todo.completed = !todo.completed
            return todo;
        })
        setTodos(todos)
    }

    const completeAll = async () => {
        let response = await fetch(`http://localhost:3000/todos`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ action: 'complete-all' })
        })
        await response.json()
        let areAllCompleted = todos.every(todo => todo.completed)
        todos = todos.map(todo => {
            todo.completed = !areAllCompleted
            return todo;
        })
        setTodos(todos)
    }


    const renderTodos = () => {
        return []
    }

    const renderItems = ({ item }) => {
        return (
            <ListItem
                key={item.id}
                title={item.title}
                badge={{ value: item.completed ? 'completed' : 'active', textStyle: { color: item.completed ? 'green' : 'red' }, containerStyle: { marginTop: -20 } }}
                bottomDivider
            />
        )
    }
    const keyExtractor = (item, index) => index.toString()

    return (
        <Card title='Todos'>
            <TodoInput onSubmit={title => saveNewTodo(title)} />
            <Divider style={{ backgroundColor: 'blue' }} />
            <ScrollView>
                <FlatList
                    keyExtractor={keyExtractor}
                    data={todos}
                    renderItem={renderItems}
                    inverted
                    style={{ flex:1}}
                />
            </ScrollView>
        </Card>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        marginHorizontal: 20,
    },
    text: {
        fontSize: 42,
    },
});

export default TodosView;