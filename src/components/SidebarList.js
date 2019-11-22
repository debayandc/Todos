import React, { useState } from 'react';

const SidebarList = ({ showHowToUse, getHowToUse, showListStates, getShowListStates, Sidebar }) => {
    let [showHowToUsePage, setshowHowToUsePage] = useState(showHowToUse);
    let openList = "sidebar-ul-li-ul-li open", closeList = "sidebar-ul-li-ul-li";
    const toggleHowToUse = e => {
        e.preventDefault();
        setshowHowToUsePage(!showHowToUsePage);
        getHowToUse(!showHowToUsePage);
    }
    // console.log("child", showListStates)
    const handleListClosure = e => {
        e.preventDefault();
        if (e.target.id === "sidebar-ul") {
            getShowListStates([true, false, false, false]);
        }
    }

    const showListOnClick = e => {
        e.preventDefault();
        switch (e.target.id) {
            case "act-li": getShowListStates([true, false, false, false]); break;
            case "pend-li": getShowListStates([false, true, false, false]); break;
            case "comp-li": getShowListStates([false, false, true, false]); break;
            case "all-li": getShowListStates([false, false, false, true]); break;
            default: break;
        }
    }
    return (
        <ul id="sidebar-ul" className="sidebar-ul" onClick={handleListClosure}>
            <li className="how-to-use sidebar-ul-li" onClick={toggleHowToUse}>
                <div style={{ fontSize: "20px" }}>How to use </div>
                <div className="question-mark">?</div>
            </li>

            <li id="act-li" className="sidebar-ul-li" onClick={showListOnClick}>
                Active List
                    <ul className={Sidebar && showListStates[0] ? openList : closeList}>
                    <li >qwerty</li>
                </ul>
            </li>

            <li id="pend-li" className="sidebar-ul-li" onClick={showListOnClick}>
                Pending Lists
                    <ul className={Sidebar && showListStates[1] ? openList : closeList}>
                    <li >qwerty</li>
                    <li >asdfgh</li>
                </ul>
            </li>

            <li id="comp-li" className="sidebar-ul-li" onClick={showListOnClick}>
                Completed Lists
                    <ul className={Sidebar && showListStates[2] ? openList : closeList}>
                    <li >poiuytr</li>
                    <li >lkjhgf</li>
                    <li >mnbvcx</li>
                </ul>
            </li>

            <li id="all-li" className="sidebar-ul-li" onClick={showListOnClick}>
                All Lists
                    <ul className={Sidebar && showListStates[3] ? openList : closeList}>
                    <li >qwerty</li>
                    <li >asdfgh</li>
                    <li >poiuytr</li>
                    <li >lkjhgf</li>
                    <li >mnbvcx</li>
                </ul>
            </li>
        </ul>
    );
}

export default SidebarList;