import React from "react";

// components
import MyButton from "../../../button/MyButton";
import MySelect from "../../../select/MySelect";

// icons
import SimCardDownloadOutlinedIcon from "@mui/icons-material/SimCardDownloadOutlined";

// utilities
import { exportTypes } from "../../../../utilities/exportTypes";

const ActionBar = ({ handleExportTypesChange }) => {
    return (
        <div className="bg-gray-100 w-full p-2 flex items-center justify-between">
            <h1 className="text-base">Result</h1>
            <div className="flex items-center justify-end gap-x-2">
                <div className="flex items-center justify-between gap-x-2 text-sm">
                    <label htmlFor="fontSize-select">Export</label>
                    <MySelect defaultValue={"CSV"} onChange={handleExportTypesChange}>
                        {Object.keys(exportTypes).map((types, index) => {
                            return (
                                <option key={index} value={exportTypes[types]}>
                                    {types}
                                </option>
                            );
                        })}
                    </MySelect>
                </div>
                <MyButton
                    myStyle={
                        "bg-amber-600 text-white text-xs hover:bg-amber-700 focus:bg-amber-700 active:bg-amber-800 px-1"
                    }
                >
                    <SimCardDownloadOutlinedIcon fontSize="small" />
                </MyButton>
            </div>
        </div>
    );
};

export default ActionBar;
