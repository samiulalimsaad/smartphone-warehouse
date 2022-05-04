import React from "react";
import { Link } from "react-router-dom";

const popularSearch = [
    "Apple",
    "samsung",
    "Xiomi",
    "Realme",
    "Vivo",
    "Oppo",
    "Walton",
    "Symfony",
    "1+",
    "tecno",
    "itel",
    "infinix",
    "nokia",
    "motorola",
];

const ExtraSection = () => {
    return (
        <div className="container p-4 mx-auto sm:p-20">
            <div className="flex flex-wrap items-center justify-between p-8 sm:p-20 sm:flex-nowrap text-slate-900 bg-slate-200">
                <div>
                    <h3 className="text-2xl">
                        Sign in for a members only experience
                    </h3>
                    <p className="text-slate-700">
                        Manage your product, orders etc
                    </p>
                </div>
                <div className="flex gap-4 mt-8 text-xs sm:mt-0 sm:text-base">
                    <Link
                        to="/login"
                        className="p-4 uppercase bg-red-500 border border-red-500 text-slate-50 hover:bg-red-700"
                    >
                        Sign in
                    </Link>
                    <Link
                        to="/signup"
                        className="p-4 uppercase border text-slate-50 bg-sky-500 border-sky-500 hover:bg-sky-700"
                    >
                        Create Account
                    </Link>
                </div>
            </div>

            <div className="p-4 sm:p-20">
                <h2 className="text-3xl text-center text-slate-700">
                    Popular Search
                </h2>

                <div className="flex flex-wrap items-center justify-center gap-4 mt-10 text-slate-700">
                    {popularSearch.map((item) => (
                        <div
                            key={item}
                            className="w-full px-8 py-4 text-center uppercase border sm:w-1/6 border-slate-500 hover:bg-slate-500 hover:text-slate-50"
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ExtraSection;
