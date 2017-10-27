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
                    details: action.details || 'any text'
                }
            ];
        case 'SAVE_TODO':
            return state.map((elem) => {
                if (elem.id === action.id) {
                    return action
                } else return elem
            });
        case 'DELETE_TODO':
            return state.filter((elem) =>
                elem.id !== action.id
            );

        default:
            return state
    }
};

export default cards
