import React from 'react'
import "./Checkbox.css";

const Checkbox = ({ onClick, checked }) => (
    <label className="container">
        <label for="checkbox" className="label-hidden">Checkbox</label>
        <input type="checkbox" onClick={onClick} checked={checked} />
        <span className="checkmark"></span>
    </label>
)

export default Checkbox;