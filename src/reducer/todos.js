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
            reorderIds(newState);
            return newState;
        case "TOGGLE_COMPLETED":
            let newdata = [...state];
            newdata[action.id].completed = !newdata[action.id].completed;
            return newdata;

        case "DRAG_ACTION":
            let newS = [...state];
            if (action.object !== undefined)
                newS.splice(action.index, action.method, action.object);
            else
                newS.splice(action.index, action.method);
            reorderIds(newS);
            return newS;
        default:
            return state
    }
}

function reorderIds(state) {
    for (let i = 0; i < state.length; i++) {
        if (state[i].id !== i) state[i].id = i;
    }
}

export default todos