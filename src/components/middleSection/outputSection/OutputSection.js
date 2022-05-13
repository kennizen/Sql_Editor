import React from "react";
import SimCardDownloadOutlinedIcon from "@mui/icons-material/SimCardDownloadOutlined";

const OutputSection = () => {
    return (
        <div className="flex flex-col">
            <div className="bg-gray-100 w-full p-2 flex items-center justify-between">
                <h1 className="text-base">Result</h1>
                <div className="flex items-center justify-end">
                    <div className="flex items-center justify-between gap-x-2 text-sm mr-5">
                        <label htmlFor="fontSize-select">Export</label>
                        <select
                            //onChange={handleFontSizeChange}
                            id="fontSize-select"
                            className="form-select appearance-none block max-w-max px-1 py-1 text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-500 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        >
                            <option value="CSV">CSV</option>
                            <option value="JSON">JSON</option>
                        </select>
                    </div>
                    <button
                        type="button"
                        className="px-1 py-1 bg-blue-600 text-white font-medium text-xs leading-normal uppercase rounded hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex align-center"
                    >
                        <SimCardDownloadOutlinedIcon fontSize="small" />
                    </button>
                </div>
            </div>
            <div className="bg-white w-full h-full"></div>
        </div>
    );
};

export default OutputSection;
