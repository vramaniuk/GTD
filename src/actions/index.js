let nextTodoId = 6;
const addTodo = (name, status, category, details) => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    name,
    status,
    category,
    details,
});

const saveTodo = (id, name, status, category, details) => {
    return {
        type: 'SAVE_TODO',
        id,
        name,
        status,
        category,
        details,
    }
};

const deleteTodo = (id) => {
    return {
        type: 'DELETE_TODO',
        id,
    }
};

const replaceTodo = (id, status) => {
    return {
        type: 'REPLACE_TODO',
        id,
        status
    }
};

export {addTodo, saveTodo, deleteTodo,replaceTodo}
