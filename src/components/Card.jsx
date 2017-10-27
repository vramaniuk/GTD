import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import './Card.css'

const Todo = ({onClick, id, status, name, category}) => (

    <Link to={`/details/${id}`}>
        <div className={category === 'bug' ? "card todo-card bug" : "card todo-card task"}>
            <div className="card-content">
                {name}
            </div>
        </div>
    </Link>
);

Todo.propTypes = {
    status: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};

export default Todo
