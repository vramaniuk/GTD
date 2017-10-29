import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Todo from '../components/Card';
import {drop} from '../helpers/index';
import {replaceTodo} from '../actions';

const TodoList = ({todos, status, onMove}) => (
    <div
        className="todos-wrapper"
        onDrop={drop(status, onMove)}
        onDragOver={(ev) => ev.preventDefault()}>
        <h2>{status}</h2>
        {todos.filter(todo => todo.status === status).map(todo => (
            <Todo key={todo.id} {...todo} />
        ))}
    </div>
);

const mapStateToProps = (state) => ({
    todos: state.todos,

});
const mapDispatchToProps = dispatch => {
    return {
        onMove (data)  {
            dispatch(replaceTodo(data.id, data.status))
        },

    }
};

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            status: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            category: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
    status: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
