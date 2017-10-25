let nextTodoId = 0;
export const addTodo = (name) => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    name:name,
    status:'todo',
    category:'task'
});