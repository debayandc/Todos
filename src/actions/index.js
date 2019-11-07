export const addTodo = (id, text) => ({
    type: 'ADD_TODO',
    id,
    text
})

export const editTodo = (id, text) => ({
    type: "EDIT_TODO",
    id,
    text
})

export const update = (id, text) => ({
    type: "UPDATE",
    id,
    text
})

export const deleteTodo = id => ({
    type: "DELETE_TODO",
    id
})

export const filterType = (id, filter) => ({
    type: 'FILTER_TYPE',
    id,
    filter
})

export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
})

export const toggleCompleted = id => ({
    type: 'TOGGLE_COMPLETED',
    id
})

export const dragAction = (index, method, object) => ({
    type: "DRAG_ACTION",
    index,
    method,
    object
})

