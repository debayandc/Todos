import { connect } from 'react-redux'
import { toggleTodo, deleteTodo, editTodo, update } from '../actions'
import { getFilteredTodos } from "./getFilteredTodos";
import React from 'react';
import Todo from './Todo';
import Checkbox from "./Checkbox";
import "./TodoList.css";
import EditTodo from "./EditTodo"
import FilterList from './filterList';

const TodoList = ({ todos, toggleTodo, deleteTodo, editTodo }) => {
    let completedCount = 0, incompletedCount = 0, data = null;
    todos.filteredTodos.map(todo => ((!todo.completed) ? completedCount++ : incompletedCount++));

    const handleClick = e => {
        todos.filteredTodos.map(todo => (todo.editing ? editTodo(todo.id) : null));
    }

    const handleCheckboxClick = id => {
        todos.filteredTodos.map(todo => {
            if (id === todo.id) toggleTodo(todo.id);
            if (todo.editing) editTodo(todo.id);
            return null;
        });
    }

    const handleDragStart = (e) => {
        console.log(e.target.id);
        e.currentTarget.style.border = "dashed";
        data = e.dataTransfer.setData("text", e.target.id);
        console.log(data);
        e.dataTransfer.effectAllowed = "move";
    }

    const onDragOver = (e) => {
        console.log(e.target);
        e.preventDefault();
    }

    const onDragEnd = (e) => {
        e.preventDefault();
        data = e.dataTransfer.getData("text");
        console.log(data);
        e.dataTransfer.clearData();
        e.currentTarget.style.border = "";
    }

    return (
        <div className="todolist-container">
            {todos.todos.length ?
                <React.Fragment>
                    <ul onClick={handleClick}>
                        {todos.filteredTodos.map(todo => (
                            <div
                                className="todolist-items add-todo spanbutton"
                                onClick={handleClick}
                                draggable
                                onDragStart={(e) => handleDragStart(e)}
                                onDragOverCapture={(e) => onDragOver(e)}
                                onDragEnd={(e) => onDragEnd(e)}
                            >
                                <Checkbox id={todo.id} checked={todo.completed} onClick={() => handleCheckboxClick(todo.id)} />
                                {todo.editing !== true ?
                                    <span className="todo-edit-range">
                                        <Todo key={todo.id} {...todo}
                                            onClick={() => editTodo(todo.id)}
                                        />
                                        <button className="btn" onClick={() => deleteTodo(todo.id)}>&#10005;</button>
                                    </span>
                                    : <EditTodo key={todo.id} id={todo.id} placeholder={todo.text} />}
                            </div>
                        ))
                        }
                    </ul >
                    <div className="add-todo footer-font footer-fix" onClick={handleClick}>
                        <div className="completed-count" > {completedCount} {completedCount > 1 ? " items left" : " item left"}</div>
                        <FilterList />
                        {incompletedCount !== 0 ?
                            (completedCount === 0 ?
                                <div className="clear-completed"
                                    onClick={() => (todos.filteredTodos.map(todo => (deleteTodo(todo.id))))}>
                                    Clear Completed</div>
                                : <div className="clear-completed"
                                    onClick={() => (todos.filteredTodos.map(todo => (todo.completed ? deleteTodo(todo.id) : null)))}>
                                    Clear Completed</div>)
                            : null}
                    </div>
                </React.Fragment> : null}
        </div>
    )
}

const mapStateToProps = state => ({
    todos: getFilteredTodos(state.todos, state.filter)
})

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id)),
    deleteTodo: id => dispatch(deleteTodo(id)),
    editTodo: id => dispatch(editTodo(id)),
    update: (id, text) => dispatch(update(id, text))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)