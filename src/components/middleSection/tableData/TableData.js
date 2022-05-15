import React, { useContext } from "react";

// components
import MyTable from "../../table/MyTable";

// utilities
import { DatabaseContext } from "../../../contexts/databaseContext";

const TableData = () => {
    const { currentDb } = useContext(DatabaseContext);

    return (
        <div className="border-l border-gray-500 overflow-y-auto">
            <h1 className="bg-gray-100 font-semibold px-3 py-[11px] sticky top-0">Table Data</h1>
            {Object.keys(currentDb.db).map((table, i) => {
                return <MyTable key={i} tableName={table} tableData={currentDb.db[table]} />;
            })}
        </div>
    );
};

export default TableData;
