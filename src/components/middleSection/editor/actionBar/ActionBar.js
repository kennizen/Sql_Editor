import React, { useContext } from "react";

// components
import MyButton from "../../../button/MyButton";
import MySelect from "../../../select/MySelect";

// icons
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import StopIcon from "@mui/icons-material/Stop";

// utilities
import { languages } from "../../../../utilities/languages";
import { fontSizes } from "../../../../utilities/fontSize";

// contexts
import { DatabaseContext } from "../../../../contexts/databaseContext";

const ActionBar = ({ handleFontSizeChange, handleLanguageChange, value }) => {
    const { setQuery, currentDb } = useContext(DatabaseContext);

    // function to get the executed query
    const handleQueryChange = () => {
        setQuery({
            query: value,
            dbName: currentDb.dbName,
        });
    };

    return (
        <div className="w-full p-2 flex items-center justify-between">
            <div className="flex items-center w-1/2 justify-start gap-x-3">
                <MyButton
                    onclick={handleQueryChange}
                    leadingIcon={<PlayArrowIcon fontSize="small" />}
                    myStyle={
                        "bg-emerald-600 text-white text-xs hover:bg-emerald-700 focus:bg-emerald-700 active:bg-emerald-800 gap-x-1 px-2"
                    }
                >
                    run
                </MyButton>
                <MyButton
                    myStyle={
                        "bg-red-600 text-white text-xs hover:bg-red-700 focus:bg-red-700 active:bg-red-800 px-1"
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
                    <MySelect defaultValue={"16px"} onChange={handleFontSizeChange}>
                        {Object.keys(fontSizes).map((sizes, index) => {
                            return (
                                <option key={index} value={fontSizes[sizes]}>
                                    {sizes}
                                </option>
                            );
                        })}
                    </MySelect>
                </div>
                <div className="flex items-center gap-x-2 mr-4 text-sm">
                    <label htmlFor="language-select">Language</label>
                    <MySelect defaultValue={"SQL"} onChange={handleLanguageChange}>
                        {Object.keys(languages).map((lang, index) => {
                            return (
                                <option key={index} value={lang}>
                                    {lang}
                                </option>
                            );
                        })}
                    </MySelect>
                </div>
            </div>
        </div>
    );
};

export default ActionBar;
