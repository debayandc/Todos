const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            let id = (state.length === 0) ? 0 : action.id;
            return [
                ...state, {
                    id: id,
                    text: action.text,
                    completed: false,
                    editing: false
                },
            ]
        case "EDIT_TODO":
            return state.map(todo =>
                todo.id === action.id ? { ...todo, editing: !todo.editing } : { ...todo, editing: false }
            );
        case "UPDATE":
            let data = [...state];
            data[action.id].text = action.text;
            data[action.id].editing = !data[action.id].editing;
            return data;
        case 'TOGGLE_TODO':
            return state.map(todo =>
                todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
            )
        case "DELETE_TODO":
            let newState = [...state];
            newState = newState.filter(todo => todo.id !== action.id);
            for (let i = 0; i < newState.length; i++) {
                if (newState[i].id !== i) newState[i].id = i;
            }
            return newState;
        case "TOGGLE_COMPLETED":
            let newdata = [...state];
            newdata[action.id].completed = !newdata[action.id].completed;
            return newdata;

        case "DRAG_AND_DROP":
            let tempState = [...state];
            let selected = tempState.splice(action.src, 1);
            tempState.splice(action.dest, 0, selected[0]);
            for (let i = 0; i < tempState.length; i++) {
                if (tempState[i].id !== i) tempState[i].id = i;
            }
            return tempState;
        default:
            return state
    }
}

export default todos