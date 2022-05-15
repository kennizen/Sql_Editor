import React from "react";

// icons
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const MySelect = ({ defaultValue, onChange, children }) => {
    return (
        <div className="relative">
            <select
                defaultValue={defaultValue}
                onChange={onChange}
                id="fontSize-select"
                className="form-select appearance-none block max-w-max px-1 py-1 text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-500 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none pr-4"
            >
                {children}
            </select>
            <ArrowDropDownIcon
                fontSize="small"
                className="pointer-events-none absolute top-1.5 -right-5"
            />
        </div>
    );
};

export default MySelect;
