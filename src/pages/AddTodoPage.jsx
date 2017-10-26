import React from 'react';
import AddTodo from '../containers/AddTodo'
import {Link} from 'react-router-dom'

const AddTodoPage = () => (
    <div className="App-body">
        <AddTodo/>
        <h1>Adding Card Page</h1><br/>
        <Link to={`/`}><br/>
            <h1>return</h1>
        </Link>
    </div>
);

export default AddTodoPage;