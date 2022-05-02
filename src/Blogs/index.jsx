import React from "react";
import useTitle from "../utilities/useTitle";
import Q1 from "./Blog/Q1";
import Q2 from "./Blog/Q2";
import Q3 from "./Blog/Q3";
import Q4 from "./Blog/Q4";

const Blogs = () => {
    useTitle("Blogs");
    return (
        <div className="p-4 mx-auto space-y-8 sm:container sm:p-20 text-slate-700">
            <Q1 />
            <Q2 />
            <Q3 />
            <Q4 />
        </div>
    );
};

export default Blogs;
