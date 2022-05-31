import { MenuIcon } from "@heroicons/react/outline";
import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Firebase.init";
import CustomLink from "../utilities/CustomLink";

const Navbar = () => {
    const [user, loading] = useAuthState(auth);
    const [show, setShow] = useState(false);
    return (
        <div className="px-4 py-4 space-y-4 text-teal-500 sm:space-y-0 sm:container sm:px-20 sm:flex sm:items-center sm:justify-between">
            <div className="flex items-center justify-between">
                <div>
                    <CustomLink
                        to="/"
                        className="flex gap-2 font-mono text-3xl font-extrabold"
                    >
                        <img src="/images/favicon.svg" className="h-8" alt="" />{" "}
                        Smartphone Warehouse
                    </CustomLink>
                </div>
                <button
                    className="sm:hidden"
                    onClick={() => setShow((p) => !p)}
                >
                    <MenuIcon className="w-8 h-8" />
                </button>
            </div>
            <div
                className={`duration-1000 transition-all ${
                    show
                        ? "from:translate-y-full to:from:translate-y-0 block sm:hidden"
                        : "from:translate-y-0 to:from:translate-y-full hidden sm:block"
                }`}
            >
                <div
                    className="flex flex-col flex-wrap items-center justify-center sm:flex-row sm:space-x-8 sm:flex-nowrap"
                    onClick={() => setShow(false)}
                >
                    <CustomLink to="/">Home</CustomLink>
                    {/* <CustomLink to="/blogs">Blogs</CustomLink> */}
                    {user && user?.emailVerified ? (
                        <>
                            <CustomLink to="/manage-inventories">
                                Manage Inventories
                            </CustomLink>
                            <CustomLink to="/add-inventory">
                                Add Inventory
                            </CustomLink>
                            <CustomLink to="/my-inventory">
                                My Inventory
                            </CustomLink>
                            <CustomLink to="/dashboard">Dashboard</CustomLink>
                            <button
                                onClick={() => {
                                    signOut(auth);
                                    localStorage.removeItem("accessToken");
                                }}
                                to="/logout"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <CustomLink to="/login">Login</CustomLink>
                            <CustomLink to="/signup">Signup</CustomLink>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
