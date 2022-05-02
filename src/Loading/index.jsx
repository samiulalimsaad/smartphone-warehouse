import React from "react";
import useTitle from "../utilities/useTitle";

const Loading = () => {
    useTitle("Loading");
    return (
        <div className="flex items-center justify-center h-screen animate-bounce">
            <h2 className="my-4 text-6xl text-center text-teal-500">Loading</h2>
            <div className="flex items-center justify-center ml-2 space-x-2">
                <div className="w-6 h-6 bg-teal-700 rounded-full" />
                <div className="w-6 h-6 bg-teal-700 rounded-full" />
                <div className="w-6 h-6 bg-teal-700 rounded-full" />
            </div>
        </div>
    );
};

export default Loading;
