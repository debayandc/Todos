import React from 'react';
import "./Hamburger.css";


const Hamburger = ({ onClick }) => {

    return (
        <div id="hamburger" className="hamburger" onClick={onClick} >
            &#9776;
        </div>
    );
}

export default Hamburger;