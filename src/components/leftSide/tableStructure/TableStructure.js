import React, { useContext } from "react";
import { DatabaseContext } from "../../../contexts/databases";
import SubdirectoryArrowRightIcon from "@mui/icons-material/SubdirectoryArrowRight";
import ViewModuleRoundedIcon from "@mui/icons-material/ViewModuleRounded";

const TableStructure = () => {
    const { currentDb } = useContext(DatabaseContext);

    return (
        <div className="flex-1 overflow-y-auto">
            <h1 className="bg-gray-100 font-semibold px-3 py-[11px] sticky top-0 mb-2">
                Table Structure
            </h1>
            {Object.keys(currentDb.db).map((key, i) => {
                return (
                    <div className="text-sm mb-1 w-full" key={i}>
                        <h1 className="pl-2 w-full">
                            {
                                <ViewModuleRoundedIcon
                                    sx={{ fontSize: "18px", marginRight: "5px" }}
                                />
                            }
                            {key}
                        </h1>
                        {Object.keys(currentDb.db[key][0]).map((val, i) => {
                            return (
                                <h1
                                    className="pl-6 pr-2 text-xs flex items-center justify-start flex-wrap"
                                    key={i}
                                >
                                    {
                                        <SubdirectoryArrowRightIcon
                                            fontSize="small"
                                            className="text-gray-500 mr-1"
                                        />
                                    }
                                    {val}
                                    <span className="ml-1 text-blue-600">({"VARCHAR[20]"})</span>
                                </h1>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
};

export default TableStructure;
