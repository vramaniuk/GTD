import React from 'react';
import AddTodo from '../containers/AddTodo';
import {Link} from 'react-router-dom';
import './AddTodoPage.css';


const AddTodoPage = () => (
    <div className="details-body">
        <div className="card-details">
            <h1>Adding Card Page</h1>
            <AddTodo/>
            <Link to={`/`}>
                <h1>Back to cards</h1>
            </Link>

        </div>
    </div>
);

export default AddTodoPage;