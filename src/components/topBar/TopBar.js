import React from "react";

const TopBar = () => {
    return (
        <div className="h-max p-2 w-full border-b border-gray-500 flex item-center justify-between">
            <div>Database</div>
            <div>
                <button>Logout</button>
            </div>
        </div>
    );
};

export default TopBar;
