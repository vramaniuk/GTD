import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {drag} from '../helpers/index';
import './Card.css'

const Todo = ({ id, status, name, category }) => (

    <Link to={`/details/${id}`}>
        <div
            draggable="true"
            onDragStart={drag(id)}
            className={category === 'bug' ? "card bug" : "card task"}>
            <div className="card-content">
                {name}
            </div>
        </div>
    </Link>
);

Todo.propTypes = {
    id: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
};

export default Todo
