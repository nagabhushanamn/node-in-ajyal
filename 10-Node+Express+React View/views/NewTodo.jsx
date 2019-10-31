import React from 'react';

const NewTodo = (props) => {
    return (
        <div className="row">
            <div className="col-md-4 offset-md-4">
                <div className="alert alert-danger">
                    <form action="todos" method="post" class="form-inline">
                        <div class="form-group">
                            <input className="form-control" name="title" />
                        </div>
                        &nbsp;
                        <button className="btn btn-dark">Add</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default NewTodo;