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
    let completedCount = 0, incompletedCount = 0, draggedItemId, draggedItem;
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
        draggedItemId = e.target.id;
        draggedItem = e.target;
        draggedItem.style.opacity = 0.4;
        e.dataTransfer.setData("text", draggedItemId);
        e.dataTransfer.dropEffect = "move";
    }

    const onDragEnter = (e) => {
        e.target.parentElement.parentElement.classList.add('over');
        // console.log(e.target)
    }

    const onDragLeave = (e) => {
        e.stopPropagation();
        // console.log(e.target)
        e.target.parentElement.parentElement.classList.remove('over');
    }

    const handleDragOver = (e, id) => {
        e.preventDefault();
        // draggedItem.classList.add('hide');
        e.dataTransfer.dropEffect = "move";
        // e.target.parentElement.parentElement.parentElement.classList.add('over');
    }

    const onDragEnd = e => {
        let listItems = document.querySelectorAll('.draggable');
        [].forEach.call(listItems, function (item) {
            item.classList.remove('over');
        });
        e.target.style.opacity = '1';
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
                    <ul className="ul" onClick={handleClick}

                    >
                        {todos.filteredTodos.map(todo => (
                            <div
                                id={todo.id}
                                text={todo.text}
                                className="todolist-items add-todo spanbutton draggable"
                                onClick={handleClick}
                                draggable
                                onDragStart={(e) => handleDragStart(e)}
                                onDragEnter={e => onDragEnter(e)}
                                onDragLeave={e => onDragLeave(e)}
                                onDrop={(e) => handleDrop(e, todo.id)}
                                onDragOver={(e) => handleDragOver(e)}
                                onDragEnd={e => onDragEnd(e)}
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