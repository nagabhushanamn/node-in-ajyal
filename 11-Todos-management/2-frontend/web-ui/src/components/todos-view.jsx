import React, { useEffect, useState } from 'react';

const TodosView = (props) => {
    let [todos, setTodos] = useState([])

    useEffect(async () => {
        let response = await fetch('http://localhost:3000/todos')
        let todos = await response.json()
        setTodos(todos);
    }, [])

    const renderTodos = () => {
        return todos.map(todo => {
            return (
                <tr>
                    <td>
                        <form method="POST" action={'/todos/' + todo.id + '?_method=PUT'}>
                            <input type="hidden" name="action" value="complete" />
                            <input type="hidden" name="id" value={todo.id} />
                            <button type="submit" style={{ backgroundColor: todo.completed ? '#FAF' : '#FFF' }}><i className="fa fa-check"></i></button>
                        </form>
                    </td>
                    <td><span className="badge">{todo.id}</span></td>
                    <td><span>{todo.title}</span></td>
                    <td><span className={todo.completed ? 'text-success' : 'text-danger'}>{todo.completed ? 'Completed' : 'Active'}</span></td>
                    <td>
                        <form method="POST" action={'/todos/' + todo.id + '?_method=GET'}>
                            <button type="submit"><i className="fa fa-edit"></i></button>
                        </form>
                    </td>
                    <td>
                        <form method="POST" action={'/todos/' + todo.id + '?_method=DELETE'}>
                            <button type="submit"><i className="fa fa-trash"></i></button>
                        </form>
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
            <div className="card card-body">
                <form method="POST" action={'/todos?_method=PUT'}>
                    <input type="hidden" name="action" value="complete-all" />
                    <button type="submit"><i className="fa fa-list"></i></button>
                </form>
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