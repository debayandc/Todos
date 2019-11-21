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
        </React.Fragment>
    );
}

export default SidebarList;