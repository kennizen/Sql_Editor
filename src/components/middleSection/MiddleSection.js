import React from "react";
import Split from "react-split";
import Editor from "./editor/Editor";
import OutputSection from "./outputSection/OutputSection";

const MiddleSection = () => {
    return (
        <Split gutterSize={5} minSize={420} sizes={[60, 40]} className="flex h-full">
            <div className="">
                <Split gutterSize={5} minSize={150} direction="vertical" className="h-full">
                    <Editor />
                    <OutputSection />
                </Split>
            </div>
            <div className="bg-red-400"></div>
        </Split>
    );
};

export default MiddleSection;
