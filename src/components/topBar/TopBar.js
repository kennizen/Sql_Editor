import React, { useContext, useState } from "react";
import MyButton from "../button/MyButton";
import { DatabaseContext } from "../../contexts/databases";
import AddIcon from "@mui/icons-material/Add";
import LogoutIcon from "@mui/icons-material/Logout";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import SettingsIcon from "@mui/icons-material/Settings";

const TopBar = ({ setCurrentDb }) => {
    const { databases } = useContext(DatabaseContext);

    const [selectedDb, setSelectedDb] = useState("database1");

    const handleChange = (e) => {
        setSelectedDb(e.target.value);
    };

    const loadDb = () => {
        setCurrentDb({
            dbName: selectedDb,
            db: databases[selectedDb],
        });
    };

    console.log(selectedDb);

    return (
        <div className="h-max p-2 w-full border-b border-gray-500 flex item-center justify-between">
            <div className="w-1/2 flex items-center justify-center gap-x-5">
                <div className="flex items-center justify-between gap-x-2 text-sm">
                    <label htmlFor="fontSize-select">Database</label>
                    <select
                        defaultValue={selectedDb}
                        onChange={handleChange}
                        id="fontSize-select"
                        className="form-select appearance-none block max-w-max px-1 py-1 text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-500 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    >
                        {Object.keys(databases).map((db, index) => {
                            return (
                                <option key={index} value={db}>
                                    {db}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <MyButton
                    onclick={loadDb}
                    leadingIcon={<AddIcon fontSize="small" />}
                    myStyle={
                        "bg-blue-600 text-white text-xs hover:bg-blue-700 focus:bg-blue-700 active:bg-blue-800 px-2"
                    }
                >
                    load
                </MyButton>
            </div>
            <div className="flex items-center justify-end gap-x-4">
                <MyButton myStyle={"text-gray-800 hover:bg-gray-100 rounded-full px-1"}>
                    <SettingsIcon fontSize="small" />
                </MyButton>
                <MyButton myStyle={"text-gray-800 hover:bg-gray-100 rounded-full px-1"}>
                    <DarkModeIcon fontSize="small" />
                </MyButton>
                <MyButton
                    leadingIcon={<LogoutIcon fontSize="small" />}
                    myStyle={
                        "bg-red-600 text-white text-xs hover:bg-red-700 focus:bg-red-700 active:bg-red-800 px-2 gap-x-2"
                    }
                >
                    logout
                </MyButton>
            </div>
        </div>
    );
};

export default TopBar;
