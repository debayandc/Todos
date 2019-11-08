import React from 'react'

const Todo = ({ onDoubleClick, onClick, completed, text, id }) => (
    <li
        id={id}
        className="input-no-style li-style"
        onDoubleClick={onDoubleClick}
        onClick={onClick}
        style={{ textDecoration: completed ? 'line-through' : 'none', fontStyle: completed ? 'italic' : 'normal' }}
    >
        {text}
    </li>
)

export default Todo