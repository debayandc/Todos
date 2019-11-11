import { filters } from '../constants/filters';

export const getFilteredTodos = (todos, filter) => {
    switch (filter) {
        case filters.SHOW_ALL:
            return { todos, filteredTodos: [...todos] }
        case filters.SHOW_COMPLETED:
            return { todos, filteredTodos: [...todos.filter(t => t.completed)] }
        case filters.SHOW_ACTIVE:
            return { todos, filteredTodos: [...todos.filter(t => !t.completed)] }
        default:
            throw new Error('Unknown filter: ' + filter)
    }
}