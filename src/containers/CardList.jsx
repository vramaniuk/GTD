import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Todo from '../components/Card'

const TodoList = ({todos, onTodoClick, status}) => (
    <div className="todos-wrapper">
        <h2>{status}</h2>
        {todos.filter(todo=>todo.status===status).map(todo => (
            <Todo key={todo.id} {...todo} />
        ))}
    </div>
);

const mapStateToProps = (state) => ({
    todos: state.todos

});

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            status: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            category: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
};

export default connect(mapStateToProps)(TodoList)
