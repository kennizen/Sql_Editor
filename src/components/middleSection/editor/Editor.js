import React, { useState } from "react";

// components
import CodeMirror from "@uiw/react-codemirror";
import ActionBar from "./actionBar/ActionBar";

// lang-import-codemirror
import { sql } from "@codemirror/lang-sql";

// utilities
import { languages } from "../../../utilities/languages";
import { fontSizes } from "../../../utilities/fontSize";

const Editor = () => {
    // states for default editor value, font size, language
    const [value, setValue] = useState(`select * from customer; 
select * from product;
select * from customer where country = 'mexico';`);
    const [fontSize, setFontSize] = useState(fontSizes[16]);
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

    return (
        <div className="flex flex-col">
            <ActionBar
                value={value}
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
