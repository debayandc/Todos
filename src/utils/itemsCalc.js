import React from "react";
export default function itemsCalc(overallCompletedCount, completedCount, incompletedCount, length) {
    return (
        overallCompletedCount < length ?
            (incompletedCount ?
                <div id="completed-count" className="completed-count" >
                    {incompletedCount} {incompletedCount > 1 ? " items pending" : " item pending"}
                </div>
                : <div id="completed-count" className="completed-count" >
                    {completedCount} {completedCount > 1 ? " items completed" : " item completed"}
                </div>)
            : (completedCount ?
                (completedCount === overallCompletedCount ?
                    <div id="completed-count" className="completed-count" >All items completed</div>
                    : <div id="completed-count" className="completed-count" >
                        {completedCount} {completedCount > 1 ? " items completed" : " item completed"}
                    </div>)
                : <div id="completed-count" className="completed-count" >
                    {incompletedCount} {incompletedCount > 1 ? " items pending" : " item pending"}
                </div>)
    )
}