import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import {
    sql,
    PLSQL,
    MySQL,
    PostgreSQL,
    SQLite,
    MariaSQL,
    StandardSQL,
    MSSQL,
    Cassandra,
} from "@codemirror/lang-sql";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import StopIcon from "@mui/icons-material/Stop";

const Editor = () => {
    const languages = {
        SQL: StandardSQL,
        PLSQL: PLSQL,
        MySQL: MySQL,
        PostgreSQL: PostgreSQL,
        SQLite: SQLite,
        MariaSQL: MariaSQL,
        MSSQL: MSSQL,
        Cassandra: Cassandra,
    };

    // state variable to get value inside editor
    const [value, setValue] = useState("-- SQL EDITOR");

    // state variable for font size
    const [fontSize, setFontSize] = useState("12px");

    // state variable for language
    const [language, setLanguage] = useState(languages.SQL);

    // function to get the value inside the editor
    const handleChange = (val) => {
        setValue(val);
    };

    // function to handle selected font size
    const handleFontSizeChange = (e) => {
        setFontSize(e.target.value);
    };

    // function to handle selected language
    const handleLanguageChange = (e) => {
        setLanguage(languages[e.target.value]);
    };

    console.log(fontSize);
    console.log(language);

    return (
        <div className="flex flex-col">
            <div className="bg-white w-full p-2 flex items-center justify-between">
                <div className="flex items-center w-1/2 justify-start gap-x-3">
                    <button
                        type="button"
                        className="px-2 py-1 bg-blue-600 text-white font-medium text-xs leading-normal uppercase rounded hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex align-center gap-x-1"
                    >
                        <PlayArrowIcon fontSize="small" />
                        Run
                    </button>
                    <button
                        type="button"
                        className="px-1 py-1 bg-blue-600 text-white font-medium text-xs leading-normal uppercase rounded hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex align-center"
                    >
                        <StopIcon fontSize="small" />
                    </button>
                </div>
                <div className="flex items-center w-1/2 justify-end gap-x-10">
                    <div className="flex items-center justify-between gap-x-2 text-sm">
                        <label className="flex items-center gap-x-1" htmlFor="fontSize-select">
                            <span>Font</span>
                            <span>size</span>
                        </label>
                        <select
                            onChange={handleFontSizeChange}
                            id="fontSize-select"
                            className="form-select appearance-none block max-w-max px-1 py-1 text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-500 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        >
                            <option value="12px">12</option>
                            <option value="14px">14</option>
                            <option value="16px">16</option>
                            <option value="18px">18</option>
                            <option value="20px">20</option>
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
            <CodeMirror
                value={value}
                theme="dark"
                height="100%"
                className="flex-1"
                extensions={[sql({ dialect: language })]}
                onChange={handleChange}
                style={{
                    fontSize: fontSize,
                    height: "70%",
                }}
            />
        </div>
    );
};

export default Editor;
