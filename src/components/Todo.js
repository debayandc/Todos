import React from 'react'

const Todo = ({ onClick, completed, text }) => (
    <li
        className="input-no-style li-style"
        onClick={onClick}
        style={{ textDecoration: completed ? 'line-through' : 'none' }}
    >
        {text}
    </li>
)

export default Todo