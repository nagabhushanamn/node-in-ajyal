import React from 'react';
import DefaultLayout from './default'
import NewTodo from './new-todo';

const TodosView = (props) => {
    let { todos } = props;
    const renderTodos = () => {
        return todos.map(todo => {
            return (
                <tr>
                    <td><input type="checkbox" /></td>
                    <td><span className="badge">{todo.id}</span></td>
                    <td><span>{todo.title}</span></td>
                    <td><span>{todo.completed ? 'Done' : 'Pending'}</span></td>
                    <td><i className="fa fa-edit"></i></td>
                    <td><i className="fa fa-trash"></i></td>
                </tr>
            )
        })
    }
    return (
        <DefaultLayout>
            <NewTodo />
            <hr />
            {props.message}
            <hr />
            <div className="card card-body">
                <table className="table table-dark table-bordered table-sm table-striped">
                    <tbody>
                        {renderTodos()}
                    </tbody>
                </table>
            </div>
        </DefaultLayout>
    );
};

export default TodosView;