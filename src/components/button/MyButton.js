import React from "react";

const MyButton = ({ myStyle, children, icon }) => {
    return (
        <button className={`${myStyle} flex items-center justify-between`}>
            {icon ? icon : ""}
            {children}
        </button>
    );
};

export default MyButton;
