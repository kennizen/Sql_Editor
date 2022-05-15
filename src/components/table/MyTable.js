import React from "react";

const MyTable = ({ tableName, tableData }) => {
    return (
        <div className="py-2 px-3 flex flex-col items-center">
            <h1 className="place-self-start pl-2 mb-2 mt-3 font-semibold">{tableName}</h1>
            <div className="overflow-x-auto w-[98%]">
                <table className="min-w-full border-collapse border border-slate-400">
                    <thead className="bg-gray-300">
                        <tr>
                            {Object.keys(tableData[0]).map((val, i) => {
                                return (
                                    <th
                                        key={i}
                                        scope="col"
                                        className="border border-slate-400 py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-800"
                                    >
                                        {val}
                                    </th>
                                );
                            })}
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {tableData.map((row, i) => {
                            return (
                                <tr key={i}>
                                    {Object.keys(row).map((obj, i) => {
                                        return (
                                            <td
                                                key={i}
                                                className="border border-slate-400 py-4 px-6 text-sm font-medium text-gray-800 whitespace-nowrap"
                                            >
                                                {row[obj]}
                                            </td>
                                        );
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyTable;
