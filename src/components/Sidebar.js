import React, { useState } from 'react';
import SidebarList from "./SidebarList";
const Sidebar = ({ onClick, showHowToUse, getHowToUse, className, Sidebar }) => {
    let initListState = [true, false, false, false];
    let [showListStates, setShowListStates] = useState(initListState);

    const getShowListStates = e => {
        if (Sidebar)
            setShowListStates(e);
    }
    // console.log(showListStates)

    return (
        <div id="sidebar-menu" className={"sidebar-menu " + className} onClick={onClick}>
            < div id="sidebar-header" className="sidebar-header" onClick={e => getShowListStates(e)}> todos options</div >
            <div id="sidebar-options" className="sidebar-options">
                <SidebarList
                    Sidebar={Sidebar}
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