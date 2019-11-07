export function notDroppableClassList(id) {
    const classList = ["outer-container", "todo-header", "toggle-all", "form-input", "form", "add-todo", "add-todo-sticky"];
    for (let i = 0; i < classList.length; i++) {
        if (classList[i] === id)
            return true;
    }
    return false;
}

