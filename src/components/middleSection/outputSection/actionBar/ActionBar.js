import React from "react";
import SimCardDownloadOutlinedIcon from "@mui/icons-material/SimCardDownloadOutlined";
import { exportTypes } from "../../../../utilities/exportTypes";
import MyButton from "../../../button/MyButton";

const ActionBar = ({ handleExportTypesChange }) => {
    return (
        <div className="bg-gray-100 w-full p-2 flex items-center justify-between">
            <h1 className="text-base">Result</h1>
            <div className="flex items-center justify-end">
                <div className="flex items-center justify-between gap-x-2 text-sm mr-4">
                    <label htmlFor="fontSize-select">Export</label>
                    <select
                        onChange={handleExportTypesChange}
                        id="fontSize-select"
                        className="form-select appearance-none block max-w-max px-1 py-1 text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-500 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    >
                        {Object.keys(exportTypes).map((types, index) => {
                            return (
                                <option key={index} value={exportTypes[types]}>
                                    {types}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <MyButton
                    myStyle={
                        "bg-blue-600 text-white text-xs hover:bg-blue-700 focus:bg-blue-700 active:bg-blue-800 px-1"
                    }
                >
                    <SimCardDownloadOutlinedIcon fontSize="small" />
                </MyButton>
            </div>
        </div>
    );
};

export default ActionBar;
