import React from "react";
import { NavLink } from "react-router-dom";

const CustomLink = ({ to, children, ...props }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                `hover:text-teal-500 duration-300 uppercase
                ${isActive ? "text-teal-300 font-semibold" : "text-slate-50"}`
            }
            {...props}
        >
            {children}
        </NavLink>
    );
};

export default CustomLink;
