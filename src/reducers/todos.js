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
                    type: action.category||'task',
                }
            ];
        default:
            return state
    }
}

export default cards