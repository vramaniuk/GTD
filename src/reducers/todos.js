import initialState from '../share/cards'

const cards = (state = initialState.data, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    name: action.name,
                    status: action.status || 'todo',
                    category: action.category || 'task',
                    details: action.details || 'any text',
                },
            ];
        case 'SAVE_TODO':
            return state.map((elem) => {
                if (elem.id === action.id) {
                    return {
                        id: action.id,
                        name: action.name,
                        status: action.status,
                        category: action.category,
                        details: action.details,
                    }
                } else return elem
            });
        case 'DELETE_TODO':
            return state.filter((elem) =>
                elem.id !== action.id,
            );

        case 'REPLACE_TODO':
            return state.map(todo => {
                if (todo.id === Number(action.id)) {
                    todo.status = action.status
                }
                return todo
            });
        default:
            return state
    }
};

export default cards
