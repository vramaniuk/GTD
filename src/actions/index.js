let nextTodoId = 6;
const addTodo = (name, category, details) => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    name: name,
    status: 'ToDo',
    category: category,
    details: details,
});

const saveTodo = (id, name, category, status, details) => {console.log(name);
    return {
        type: 'SAVE_TODO',
        id,
        name: name.value,
        category: category.value,
        status: status.value,
        details: details.value,
    }
};

const deleteTodo = (id) => {
    return {
        type: 'DELETE_TODO',
        id,
    }
};

export { addTodo, saveTodo, deleteTodo }
