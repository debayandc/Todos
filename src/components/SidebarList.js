import React, { useState } from 'react';

const SidebarList = ({ showHowToUse, getHowToUse, showListStates, getShowListStates }) => {
    let [showHowToUsePage, setshowHowToUsePage] = useState(showHowToUse);
    let [showList, setShowList] = useState(showListStates);
    const toggleHowToUse = e => {
        e.preventDefault();
        setshowHowToUsePage(!showHowToUsePage);
        getHowToUse(!showHowToUsePage);
    }

    const handleListClosure = e => {
        e.preventDefault();
        if (e.target.id === "sidebar-ul") {
            setShowList([false, false, false, false]);
        }
    }

    const showListOnClick = e => {
        e.preventDefault();
        switch (e.target.id) {
            case "act-li": setShowList([true, false, false, false]); break;
            case "pend-li": setShowList([false, true, false, false]); break;
            case "comp-li": setShowList([false, false, true, false]); break;
            case "all-li": setShowList([false, false, false, true]); break;
            default: break;
        }
        getShowListStates(showList);
    }
    return (
        <ul id="sidebar-ul" className="sidebar-ul" onClick={handleListClosure}>
            <li className="how-to-use sidebar-ul-li" onClick={toggleHowToUse}>
                <div style={{ fontSize: "20px" }}>How to use </div>
                <div className="question-mark">?</div>
            </li>

            <li id="act-li" className="sidebar-ul-li" onClick={showListOnClick}>
                Active List
                {showList[0] ?
                    <ul>
                        <li className="sidebar-ul-li-ul-li">qwerty</li>
                    </ul>
                    : null}
            </li>

            <li id="pend-li" className="sidebar-ul-li" onClick={showListOnClick}>
                Pending Lists
                {showList[1] ?
                    <ul>
                        <li className="sidebar-ul-li-ul-li">qwerty</li>
                        <li className="sidebar-ul-li-ul-li">asdfgh</li>
                    </ul>
                    : null}
            </li>

            <li id="comp-li" className="sidebar-ul-li" onClick={showListOnClick}>
                Completed Lists
                {showList[2] ?
                    <ul>
                        <li className="sidebar-ul-li-ul-li">poiuytr</li>
                        <li className="sidebar-ul-li-ul-li">lkjhgf</li>
                        <li className="sidebar-ul-li-ul-li">mnbvcx</li>
                    </ul>
                    : null}
            </li>

            <li id="all-li" className="sidebar-ul-li" onClick={showListOnClick}>
                All Lists
                {showList[3] ?
                    <ul>
                        <li className="sidebar-ul-li-ul-li">qwerty</li>
                        <li className="sidebar-ul-li-ul-li">asdfgh</li>
                        <li className="sidebar-ul-li-ul-li">poiuytr</li>
                        <li className="sidebar-ul-li-ul-li">lkjhgf</li>
                        <li className="sidebar-ul-li-ul-li">mnbvcx</li>
                    </ul>
                    : null}
            </li>
        </ul>
    );
}

export default SidebarList;