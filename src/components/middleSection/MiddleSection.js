import React from "react";
import Split from "react-split";
import Editor from "./editor/Editor";
import OutputSection from "./outputSection/OutputSection";
import TableData from "./tableData/TableData";

const MiddleSection = () => {
    return (
        <Split
            gutterSize={5}
            minSize={420}
            sizes={[60, 40]}
            className="flex"
            style={{ height: "calc(100% - 47px)" }}
        >
            <Split gutterSize={5} minSize={150} direction="vertical" className="h-full">
                <Editor />
                <OutputSection />
            </Split>
            <TableData />
        </Split>
    );
};

export default MiddleSection;
