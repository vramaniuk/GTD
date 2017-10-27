import initialState from '../share/cards'
const cards = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    name: action.name,
                    status:action.status||'todo',
                    category: action.category||'task',
                    details:action.details||'any text'
                }
            ];
        case 'SAVE_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    name: action.name,
                    status:action.status||'todo',
                    category: action.category||'task',
                    details:action.details||'any text'
                }
            ];
        default:
            return state
    }
};

export default cards
