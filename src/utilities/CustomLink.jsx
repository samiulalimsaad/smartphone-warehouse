import React from "react";
import { NavLink } from "react-router-dom";

const CustomLink = ({ to, children, ...props }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                `hover:text-yellow-500 duration-300
                ${isActive ? "text-yellow-300 font-semibold" : "text-slate-50"}`
            }
            {...props}
        >
            {children}
        </NavLink>
    );
};

export default CustomLink;
