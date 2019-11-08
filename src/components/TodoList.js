import { connect } from 'react-redux'
import { toggleTodo, deleteTodo, editTodo, update } from '../actions'
import { getFilteredTodos } from "./getFilteredTodos";
import React from 'react';
import Todo from './Todo';
import Checkbox from "./Checkbox";
import "./TodoList.css";
import EditTodo from "./EditTodo"
import FilterList from './filterList';
import itemsCalc from "../utils/itemsCalc";

const TodoList = ({ todos, toggleTodo, deleteTodo, editTodo }) => {
    let completedCount = 0, incompletedCount = 0, overallCompletedCount = 0, overallIncompletedCount = 0;
    todos.filteredTodos.map(todo => ((todo.completed) ? completedCount++ : incompletedCount++));
    todos.todos.map(todo => ((todo.completed) ? overallCompletedCount++ : overallIncompletedCount++));

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

    const handleTodoClick = id => {
        todos.filteredTodos.map(todo => {
            if (id !== todo.id) {
                if (todo.editing) editTodo(todo.id);
            }
            return null;
        });
    }
    return (
        <div className="todolist-container">
            {todos.todos.length ?
                <React.Fragment>
                    <ul id="ul" className="ul" onClick={handleClick}>
                        {todos.filteredTodos.map(todo => (
                            <div
                                id={todo.id}
                                text={todo.text}
                                className="todolist-items add-todo spanbutton draggable"
                                onClick={handleClick}
                                draggable
                            >
                                <Checkbox id={todo.id} checked={todo.completed} onClick={() => handleCheckboxClick(todo.id)} />
                                {todo.editing !== true ?
                                    <span className="todo-edit-range">
                                        <Todo id={todo.id} key={todo.id} {...todo}
                                            onDoubleClick={() => editTodo(todo.id)}
                                            onClick={() => handleTodoClick(todo.id)}
                                        />
                                        <button className="btn" onClick={() => deleteTodo(todo.id)}>&#10005;</button>
                                    </span>
                                    : <EditTodo key={todo.id} id={todo.id} placeholder={todo.text} />}
                            </div>
                        ))
                        }
                    </ul >
                    <div id="footer" className="add-todo footer-font footer-fix" onClick={handleClick}>
                        {itemsCalc(overallCompletedCount, completedCount, incompletedCount, todos.todos.length)}
                        <FilterList />
                        {completedCount !== 0 ?
                            (incompletedCount === 0 ?
                                <div id="clear-completed" className="clear-completed"
                                    onClick={() => (todos.filteredTodos.map(todo => (deleteTodo(todo.id))))}>
                                    Clear Completed</div>
                                : <div id="clear-completed" className="clear-completed"
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