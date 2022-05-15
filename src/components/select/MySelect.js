import React from "react";

const MySelect = ({ defaultValue, onChange, children }) => {
    return (
        <div className="relative max-w-max">
            <select
                defaultValue={defaultValue}
                onChange={onChange}
                id="fontSize-select"
                className="p-1 text-gray-700 bg-white border border-gray-500 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            >
                {children}
            </select>
        </div>
    );
};

export default MySelect;
