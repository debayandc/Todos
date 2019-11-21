import React, { useState } from 'react';

const SidebarList = ({ showHowToUse, getHowToUse }) => {
    let [showHowToUsePage, setshowHowToUsePage] = useState(showHowToUse);

    const toggleHowToUse = e => {
        e.preventDefault();
        setshowHowToUsePage(!showHowToUsePage);
        getHowToUse(!showHowToUsePage);
    }
    return (
        <React.Fragment>
            <div className="how-to-use" onClick={toggleHowToUse}>
                <div style={{ fontSize: "15px" }}>How to use </div>
                <div className="question-mark">?</div>
            </div>
            <div>Active List
                <li>qwerty</li>
            </div>
            <div>Pending Lists
                <li>qwerty</li>
                <li>asdfgh</li>
            </div>
            <div>Completed Lists
                <li>poiuytr</li>
                <li>lkjhgf</li>
                <li>mnbvcx</li>
            </div>
            <div>All Lists
                <li>qwerty</li>
                <li>asdfgh</li>
                <li>poiuytr</li>
                <li>lkjhgf</li>
                <li>mnbvcx</li>
            </div>
        </React.Fragment>
    );
}

export default SidebarList;