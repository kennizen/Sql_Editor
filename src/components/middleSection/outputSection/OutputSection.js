import React from "react";
import ActionBar from "./actionBar/ActionBar";

const OutputSection = () => {
    return (
        <div className="flex flex-col">
            <ActionBar />
            <div className="bg-white w-full h-full"></div>
        </div>
    );
};

export default OutputSection;
