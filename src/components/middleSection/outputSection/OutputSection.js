import React, { useContext } from "react";

// components
import MyTable from "../../table/MyTable";
import ActionBar from "./actionBar/ActionBar";

// contexts
import { DatabaseContext, getQueryResult } from "../../../contexts/databaseContext";

const OutputSection = () => {
    const { query } = useContext(DatabaseContext);

    return (
        <div className="flex flex-col">
            <ActionBar />
            <div className="bg-white w-full h-full overflow-y-auto p-2">
                {typeof getQueryResult(query) === "string" ? (
                    getQueryResult(query)
                ) : (
                    <MyTable tableName={""} tableData={getQueryResult(query)} />
                )}
            </div>
        </div>
    );
};

export default OutputSection;
