import React from 'react';
import SidebarList from "./SidebarList";
const Sidebar = ({ onClick, showHowToUse, getHowToUse }) => {

    return (
        <div id="sidebar-menu" className="sidebar-menu" onClick={onClick}>
            < div id="sidebar-header" className="sidebar-header" > todos options</div >
            <div id="sidebar-options" className="sidebar-options">
                <SidebarList showHowToUse={showHowToUse} getHowToUse={getHowToUse} />
            </div>
            <div id="sidebar-footer" className="sidebar-footer"> &#169; Debayan Chatterjee, 2019</div>
        </div >
    );
}

export default Sidebar;