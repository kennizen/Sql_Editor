import React, { useContext, useState } from "react";

// components
import MyButton from "../button/MyButton";
import MySelect from "../select/MySelect";

// icons
import AddIcon from "@mui/icons-material/Add";
import LogoutIcon from "@mui/icons-material/Logout";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import SettingsIcon from "@mui/icons-material/Settings";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// contexts
import { DatabaseContext } from "../../contexts/databaseContext";

const TopBar = ({ setCurrentDb, setToggleLeftBar, toggleLeftBar }) => {
    const { databases } = useContext(DatabaseContext);

    // states for seleted databse
    const [selectedDb, setSelectedDb] = useState("database1");

    // function to set the selected database
    const handleChange = (e) => {
        setSelectedDb(e.target.value);
    };

    // function to load the selected database
    const loadDb = () => {
        setCurrentDb({
            dbName: selectedDb,
            db: databases[selectedDb],
        });
    };

    // function to handle left bar toggle in small sceen
    const handleToggle = () => {
        setToggleLeftBar(!toggleLeftBar);
    };

    return (
        <div className="h-max p-2 border-b border-gray-500 flex item-center justify-between">
            <div className="w-1/2 flex items-center lg:justify-center md:justify-start mmd:justify-start gap-x-2">
                <MyButton
                    onclick={handleToggle}
                    myStyle={
                        "bg-blue-600 text-white text-xs hover:bg-blue-700 focus:bg-blue-700 active:bg-blue-800 px-1 lg:hidden md:block mmd:block"
                    }
                >
                    <ArrowForwardIosIcon fontSize="small" />
                </MyButton>
                <div className="flex items-center justify-between gap-x-2 text-sm">
                    <label htmlFor="fontSize-select">Database</label>
                    <MySelect defaultValue={selectedDb} onChange={handleChange}>
                        {Object.keys(databases).map((db, index) => {
                            return (
                                <option key={index} value={db}>
                                    {db}
                                </option>
                            );
                        })}
                    </MySelect>
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
