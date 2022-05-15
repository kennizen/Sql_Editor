import React from "react";
import MyButton from "../button/MyButton";

// components
import DatabaseStructure from "./databaseStructure/DatabaseStructure";
import TableStructure from "./tableStructure/TableStructure";

// icons
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const LeftBar = ({ toggleLeftBar, setToggleLeftBar }) => {
    // function to toggle leftbar
    const handleToggle = () => {
        setToggleLeftBar(!toggleLeftBar);
    };

    return (
        <div
            className={`${
                toggleLeftBar
                    ? "md:flex md:flex-col mmd:flex mmd:flex-col md:h-full mmd:h-full md:absolute mmd:absolute md:z-10 mmd:z-10"
                    : "md:hidden mmd:hidden "
            } w-64 border-r border-gray-500 flex-shrink-0 lg:flex lg:flex-col lg:static`}
        >
            <h1 className="bg-white py-[9px] text-lg text-center uppercase md:flex md:items-center md: justify-evenly mmd:flex mmd:items-center mmd:justify-evenly lg:block">
                Sql Editor
                <MyButton onclick={handleToggle} myStyle={"lg:hidden md:block mmd:block"}>
                    <ArrowBackIosIcon fontSize="small" />
                </MyButton>
            </h1>
            <DatabaseStructure />
            <TableStructure />
        </div>
    );
};

export default LeftBar;
