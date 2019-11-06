import React from 'react'

const Todo = ({ onClick, completed, text, id }) => (
    <li
        id={id}
        className="input-no-style li-style"
        onClick={onClick}
        style={{ textDecoration: completed ? 'line-through' : 'none', fontStyle: completed ? 'italic' : 'normal' }}
    >
        {text}
    </li>
)

export default Todo