const cards = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    type: action.category||'task',
                    name: action.name,
                    status:action.status||'todo'
                }
            ];
        default:
            return state
    }
}

export default cards