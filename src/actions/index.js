let nextTodoId = 0;
 const addTodo = (name) => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    name:name,
    status:'ToDo',
    category:'task'
});

export {addTodo}