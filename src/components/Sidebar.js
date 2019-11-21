import React, { useState } from 'react';
import SidebarList from "./SidebarList";
const Sidebar = ({ onClick, showHowToUse, getHowToUse }) => {
    let [showListStates, setShowListStates] = useState([false, false, false, false]);

    const getShowListStates = e => {
        setShowListStates = ([false, false, false, false]);
    }

    return (
        <div id="sidebar-menu" className="sidebar-menu" onClick={onClick}>
            < div id="sidebar-header" className="sidebar-header" onClick={e => getShowListStates(e)}> todos options</div >
            <div id="sidebar-options" className="sidebar-options">
                <SidebarList
                    showListStates={showListStates}
                    getShowListStates={e => getShowListStates(e)}
                    showHowToUse={showHowToUse}
                    getHowToUse={getHowToUse}
                />
            </div>
            <div id="sidebar-footer" className="sidebar-footer" onClick={e => getShowListStates(e)}> &#169; Debayan Chatterjee, 2019</div>
        </div >
    );
}

export default Sidebar;