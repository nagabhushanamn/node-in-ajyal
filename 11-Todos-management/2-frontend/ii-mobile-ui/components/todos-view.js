import React, { useEffect, useState } from 'react';
import TodoInput from './todo-input'
import { View, Text, ScrollView, List, FlatList, StyleSheet } from 'react-native'

import { Card, ListItem, Button, Icon, Divider } from 'react-native-elements'

import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../actions/todos'

const TodosView = (props) => {

    let [todo, setTodo] = useState({ title: '' }) // current todo
    let [isEditing, setEditing] = useState(false) // is editing
    let todos = useSelector(state => state.todos);
    let dispatch = useDispatch();
  
    useEffect(() => {
        dispatch(actions.viewTodos());
    }, [])

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
            <TodoInput onSubmit={title => dispatch(actions.addTodo(title))} />
            <Divider style={{ backgroundColor: 'blue' }} />
            <ScrollView>
                <FlatList
                    keyExtractor={keyExtractor}
                    data={todos}
                    renderItem={renderItems}
                    inverted
                    style={{ flex: 1 }}
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