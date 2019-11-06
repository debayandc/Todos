import { connect } from 'react-redux'
import { toggleTodo, deleteTodo, editTodo, update, dragndrop } from '../actions'
import { getFilteredTodos } from "./getFilteredTodos";
import React from 'react';
import Todo from './Todo';
import Checkbox from "./Checkbox";
import "./TodoList.css";
import EditTodo from "./EditTodo"
import FilterList from './filterList';

const TodoList = ({ todos, toggleTodo, deleteTodo, editTodo, dragndrop }) => {
    let completedCount = 0, incompletedCount = 0;
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
        e.dataTransfer.setData("text", e.target.id);
        e.dataTransfer.dropEffect = "move";
    }

    const handleDragOver = e => {
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
    }

    const handleDrop = e => {
        e.preventDefault();
        let data = e.dataTransfer.getData("text");
        let src = Number(data);
        let dest = Number(e.target.id);
        dragndrop(src, dest);
    }

    return (
        <div className="todolist-container">
            {todos.todos.length ?
                <React.Fragment>
                    <ul onClick={handleClick}

                    >
                        {todos.filteredTodos.map(todo => (
                            <div
                                id={todo.id}
                                className="todolist-items add-todo spanbutton"
                                onClick={handleClick}
                                draggable
                                onDragStart={(e) => handleDragStart(e)}
                                onDrop={(e) => handleDrop(e)}
                                onDragOver={(e) => handleDragOver(e)}
                            >
                                <Checkbox id={todo.id} checked={todo.completed} onClick={() => handleCheckboxClick(todo.id)} />
                                {todo.editing !== true ?
                                    <span className="todo-edit-range">
                                        <Todo id={todo.id} key={todo.id} {...todo}
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
    update: (id, text) => dispatch(update(id, text)),
    dragndrop: (src, dest) => dispatch(dragndrop(src, dest))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)