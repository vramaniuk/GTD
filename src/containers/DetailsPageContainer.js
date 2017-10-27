import { connect } from 'react-redux'
import  DetailsPage  from '../pages/DetailsPage'
import { saveTodo, deleteTodo } from '../actions'

const mapStateToProps = (state, ownProps) => {
    const id = parseInt(ownProps.match.params.id,10);
    const matchedElem = state.todos.find(todo => {return todo.id === id});
    return {
        'id': matchedElem.id,
        name: matchedElem.name,
        category: matchedElem.category,
        status: matchedElem.status,
        details: matchedElem.details,
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        saveTodo: (id, name, category, status, details) => {
            dispatch(saveTodo(id, name, category, status, details));
            ownProps.history.push('/')
        },
        deleteTodo: (id) => {
            dispatch(deleteTodo(id));
            ownProps.history.push('/')
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DetailsPage);

