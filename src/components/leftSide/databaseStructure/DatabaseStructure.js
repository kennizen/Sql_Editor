import React, { useContext, useState } from "react";
import { DatabaseContext } from "../../../contexts/databases";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ViewModuleRoundedIcon from "@mui/icons-material/ViewModuleRounded";

const DatabaseStructure = () => {
    const { currentDb } = useContext(DatabaseContext);
    const [showColumns, setShowColumns] = useState(() => {
        let ar = [];
        let len = Object.keys(currentDb.db).length;
        for (let i = 0; i < len; i++) ar.push(1);
        return ar;
    });

    const handleShowColumns = (e) => {
        let i = parseInt(e.target.id);
        let ar = showColumns;
        ar[i] === 0 ? (ar[i] = 1) : (ar[i] = 0);
        setShowColumns([...ar]);
    };

    return (
        <div className="flex-1 overflow-y-auto">
            <h1 className="bg-gray-100 font-semibold px-3 py-[11px] sticky top-0">
                Database Structure
            </h1>
            <h1 className="px-6 text-sm mt-2 mb-1">{currentDb.dbName}</h1>
            {Object.keys(currentDb.db).map((key, i) => {
                return (
                    <div className="text-sm mb-1 w-full" key={i}>
                        <h1
                            id={i}
                            onClick={handleShowColumns}
                            className="pl-10 cursor-pointer hover:bg-gray-200 w-full"
                        >
                            {showColumns[i] === 1 && (
                                <ArrowDropDownIcon
                                    fontSize="small"
                                    className="pointer-events-none"
                                />
                            )}
                            {showColumns[i] === 0 && (
                                <ArrowRightIcon fontSize="small" className="pointer-events-none" />
                            )}
                            {key}
                        </h1>
                        {showColumns[i] === 1 ? (
                            Object.keys(currentDb.db[key][0]).map((val, i) => {
                                return (
                                    <h1 className="pl-14" key={i}>
                                        {
                                            <ViewModuleRoundedIcon
                                                sx={{ fontSize: "18px", marginRight: "5px" }}
                                                className="text-gray-500"
                                            />
                                        }
                                        {val}
                                    </h1>
                                );
                            })
                        ) : (
                            <></>
                        )}
                    </div>
                );
            })}
            <div className="mt-3"></div>
        </div>
    );
};

export default DatabaseStructure;
