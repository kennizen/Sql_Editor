import React from "react";
import MyButton from "../../../button/MyButton";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import StopIcon from "@mui/icons-material/Stop";

import { languages } from "../../../../utilities/languages";
import { fontSizes } from "../../../../utilities/fontSize";

const ActionBar = ({ handleFontSizeChange, handleLanguageChange }) => {
    return (
        <div className="w-full p-2 flex items-center justify-between">
            <div className="flex items-center w-1/2 justify-start gap-x-3">
                <MyButton
                    leadingIcon={<PlayArrowIcon fontSize="small" />}
                    myStyle={
                        "bg-blue-600 text-white text-xs hover:bg-blue-700 focus:bg-blue-700 active:bg-blue-800 gap-x-1 px-2"
                    }
                >
                    run
                </MyButton>
                <MyButton
                    myStyle={
                        "bg-blue-600 text-white text-xs hover:bg-blue-700 focus:bg-blue-700 active:bg-blue-800 px-1"
                    }
                >
                    <StopIcon fontSize="small" />
                </MyButton>
            </div>
            <div className="flex items-center w-1/2 justify-end gap-x-10">
                <div className="flex items-center justify-between gap-x-2 text-sm">
                    <label className="flex items-center gap-x-1" htmlFor="fontSize-select">
                        <span>Font</span>
                        <span>size</span>
                    </label>
                    <select
                        defaultValue={"16px"}
                        onChange={handleFontSizeChange}
                        id="fontSize-select"
                        className="form-select appearance-none block max-w-max px-1 py-1 text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-500 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    >
                        {Object.keys(fontSizes).map((sizes, index) => {
                            return (
                                <option key={index} value={fontSizes[sizes]}>
                                    {sizes}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <div className="flex items-center gap-x-2 mr-1 text-sm">
                    <label htmlFor="language-select">Language</label>
                    <select
                        onChange={handleLanguageChange}
                        id="language-select"
                        className="form-select appearance-none block max-w-max px-1 py-1 text-sm text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-500 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    >
                        {Object.keys(languages).map((lang, index) => {
                            return (
                                <option key={index} value={lang}>
                                    {lang}
                                </option>
                            );
                        })}
                    </select>
                </div>
            </div>
        </div>
    );
};

export default ActionBar;
