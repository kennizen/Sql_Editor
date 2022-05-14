import React from "react";

const MyButton = ({ myStyle, children, leadingIcon, endIcon, onclick }) => {
    return (
        <button
            onClick={onclick}
            className={`${myStyle} py-1 font-medium leading-normal uppercase rounded hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out flex align-center`}
        >
            {leadingIcon ? leadingIcon : ""}
            {children}
            {endIcon ? endIcon : ""}
        </button>
    );
};

export default MyButton;
