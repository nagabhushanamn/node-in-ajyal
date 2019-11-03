import React, { useEffect, useState } from 'react';
import TodoInput from './todo-input'

const TodosView = (props) => {
   
    let [todos, setTodos] = useState([])  // all todos
    let [todo, setTodo] = useState({ title: '' }) // current todo
    let [isEditing, setEditing] = useState(false) // is editing

    useEffect(() => {
        getTodos();
    }, [])

    const getTodos = async () => {
        let response = await fetch('http://localhost:3000/todos',{
            method:'GET'
        })
        let todos = await response.json()
        setTodos(todos);  // diffing
    }
    const saveNewTodo = async (title, id) => {
        let response = await fetch(`http://localhost:3000/todos/${id?id:''}`, {
            method: isEditing ? 'PUT' : 'POST',// POST
            headers: {
                'Content-Type': 'application/json' // json
            },
            body: JSON.stringify({ title })
        })
        let todo = await response.json()
        if (!isEditing)
            setTodos(todos.concat(todo)); // diffing on Virtual DOM
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
        return todos.map(todo => {
            return (
                <tr key={todo.id}>
                    <td>
                        <button onClick={e => completedTodo(todo.id)} 
                                style={{ backgroundColor: todo.completed ? '#FAF' : '#FFF' }}>
                            <i className="fa fa-check"></i>
                        </button>
                    </td>
                    <td><span className="badge">{todo.id}</span></td>
                    <td><span>{todo.title}</span></td>
                    <td><span className={todo.completed ? 'text-success' : 'text-danger'}>{todo.completed ? 'Completed' : 'Active'}</span></td>
                    <td>
                        <button onClick={e => editTodo(todo.id)}><i className="fa fa-edit"></i></button>
                    </td>
                    <td>
                        <button onClick={e => deleteTodo(todo.id)}><i className="fa fa-trash"></i></button>
                    </td>
                </tr>
            )
        })
    }
    return (
        <div className="container">
            <hr />
            <h1>React-View ( client-side )</h1>
            <hr />
            
            <TodoInput 
                title={todo.title} 
                isEditing={isEditing} 
                onSubmit={title => saveNewTodo(title, todo.id)} />
            
            <div className="card card-body">
                <div className="row">
                    <div className="col-1 col-sm-1 col-md-1">
                        <button onClick={e => completeAll()}><i className="fa fa-list"></i></button>
                    </div>
                </div>
                <hr />
                <table className="table table-bordered table-sm table-striped">
                    <tbody>
                        {renderTodos()}
                    </tbody>
                </table>
                {todos.lenghth === 0 ? 'Nil' : ''}
            </div>
        </div>
    );
};

export default TodosView;