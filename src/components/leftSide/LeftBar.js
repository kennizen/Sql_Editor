import React from "react";
import DatabaseStructure from "./databaseStructure/DatabaseStructure";
import TableStructure from "./tableStructure/TableStructure";

const LeftBar = () => {
    return (
        <div className="w-64 border-r border-gray-500 flex-shrink-0 flex flex-col">
            <h1 className="py-[9px] text-lg text-center border-b border-gray-600 uppercase">
                Sql Editor
            </h1>
            <DatabaseStructure />
            <TableStructure />
        </div>
    );
};

export default LeftBar;
