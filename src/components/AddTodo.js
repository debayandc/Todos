import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTodo, toggleCompleted, editTodo } from '../actions';
import { getFilteredTodos } from "../utils/getFilteredTodos";
import Hamburger from "./Hamburger";
import Sidebar from "./Sidebar";
import "../App.css";

const AddTodo = ({ dispatch, todos, getSidebarval, showSidebar, getHowToUse, showHowToUse }) => {
    let input, count = 0;
    let [showBar, setshowBar] = useState(showSidebar);
    let id = (todos.todos.length === undefined) ? 0 : todos.todos.length;
    const handleSubmit = event => {
        event.preventDefault()
        if (!input.value.trim()) {
            return
        }
        dispatch(addTodo(id, input.value))
        input.value = ''
        id = 0;
    }
    const handleClick = e => {
        e.preventDefault();
        todos.todos.map(todo => (todo.completed ? count++ : ""));
        if (count < todos.todos.length) {
            todos.todos.map(todo => {
                if (!todo.completed) {
                    return dispatch(toggleCompleted(todo.id))
                }
                return "";
            })
        }
        if (count === todos.todos.length) {
            todos.todos.map(todo => {
                if (todo.completed) {
                    return dispatch(toggleCompleted(todo.id))
                }
                return "";
            })
        }
    }

    const handleClickNoEdit = e => {
        e.preventDefault();
        if (showSidebar) {
            setshowBar(!showBar);
            getSidebarval(!showBar);
        }
        todos.todos.map(todo => (todo.editing ? dispatch(editTodo(todo.id)) : null));
    }

    const toggleShowSidebar = e => {
        e.preventDefault();
        setshowBar(!showBar);
        getSidebarval(!showBar);
    }

    const onClickOpenSidebar = e => {
        e.stopPropagation();
    }

    return (
        <>
            {showSidebar ? <Sidebar onClick={onClickOpenSidebar} showHowToUse={showHowToUse} getHowToUse={getHowToUse} /> : null}
            <div id="add-todo-sticky" className="add-todo-sticky" onClick={handleClickNoEdit} style={{ opacity: showSidebar ? 0.4 : 1 }}>
                <div id="main-header" className="main-header" >
                    {!showSidebar ? <Hamburger onClick={e => toggleShowSidebar(e)} /> : <div className="placeholder-div"></div>}
                    <div id="todo-header" className="todo-header">todos</div>
                </div>
                <div id="add-todo" className="add-todo" style={{ height: "50px" }}>
                    <button id="toggle-all" className="toggle-all" onClick={handleClick}>&#8250;</button>
                    <form id="form" className="form" onSubmit={event => handleSubmit(event)} >
                        <label for="form-input" class="label-hidden">What needs to be done</label>
                        <input
                            autoComplete="off"
                            id="form-input"
                            className="input-no-style input-override form"
                            required
                            type="text"
                            placeholder="What needs to be done"
                            ref={node => (input = node)} />
                    </form>
                </div>
            </div >
        </>
    )
}

const mapStateToProps = state => ({
    todos: getFilteredTodos(state.todos, state.filter)
})

export default connect(mapStateToProps)(AddTodo)