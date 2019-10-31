import React from 'react';

const NewTodo = (props) => {
    return (
        <div className="row">
            <div className="col-md-4 offset-md-4">
                <div className="alert alert-danger">
                    <form action="/todos" method="post" class="form-inline">
                        
                        <input type="hidden" name="id" value={props.todo.id} />
                        <input type="hidden" name="isEditing" value={props.isEditing} />
                        
                        <div class="form-group">
                            <input value={props.todo.title} className="form-control" name="title" />
                        </div>
                        &nbsp;
                        <button className="btn btn-dark">{props.isEditing ? 'Update' : 'Add'}</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default NewTodo;