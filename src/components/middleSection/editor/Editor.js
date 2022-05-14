import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { sql } from "@codemirror/lang-sql";

import { languages } from "../../../utilities/languages";
import { fontSizes } from "../../../utilities/fontSize";
import ActionBar from "./actionBar/ActionBar";

const Editor = () => {
    // state variable to get value inside editor
    const [value, setValue] = useState("-- SQL EDITOR");

    // state variable for font size
    const [fontSize, setFontSize] = useState(fontSizes[16]);

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
            <ActionBar
                handleFontSizeChange={handleFontSizeChange}
                handleLanguageChange={handleLanguageChange}
            />
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
