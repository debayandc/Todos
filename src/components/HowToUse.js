import React from 'react';
const HowToUse = ({ handleSidebarnav, hideHowToUse, className }) => {
    return (
        <div className={"how-to-use-container " + className}>
            <div className="how-to-use-header">
                <div
                    className="hamburger hb2"
                    onClick={e => handleSidebarnav(e)}>&#9776;
                </div>
                <div style={{ display: "flex", flexDirection: "row", flexBasis: "90%", justifyContent: "center" }}>
                    <div style={{
                        fontSize: "30px", fontWeight: "bold", color: "white", padding: "10px", cursor: "default"
                    }}>How to use</div>
                    <div className="question-mark q-mark2">?</div>
                </div>
                <button className="btn btn2" onClick={e => hideHowToUse(e)}>&#10005;</button>
            </div>
            <ol className="how-to-use-content">
                <li className="instructions">Double click on any list item to edit it.</li>
                <li className="instructions">To mark an item as completed, tap on the icon on the left of each item.</li>
                <li className="instructions">List items can be deleted by clicking on the delete button that appears on the right of each item on clicking.</li>
                <li className="instructions">Hold and drag the items to re-order the list.</li>
                <li className="instructions">Filter the items based on the tabs at the bottom.</li>
                <li className="instructions">Clear Completed option appears at the bottom when one or more items are completed. Click it to remove completed items from the list.</li>
            </ol>
            <button id="filters-btn" className="filters-btn close-btn"
                onClick={e => hideHowToUse(e)}
            >Close</button>
        </div>
    );
}

export default HowToUse;