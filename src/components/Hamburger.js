import React from 'react';

const Hamburger = ({ onClick }) => {

    return (
        <div id="hamburger" className="hamburger" onClick={onClick} >
            &#9776;
        </div>
    );
}

export default Hamburger;