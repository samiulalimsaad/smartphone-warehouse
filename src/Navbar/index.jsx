import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Firebase.init";
import CustomLink from "../utilities/CustomLink";

const Navbar = () => {
    const [user, loading] = useAuthState(auth);
    return (
        <div className="px-4 py-4 space-y-4 sm:space-y-0 sm:container sm:px-20 sm:flex sm:items-center sm:justify-between text-slate-50">
            <CustomLink
                to="/"
                className="flex gap-2 font-mono text-3xl font-extrabold animate-pulse"
            >
                <img src="/images/favicon.svg" className="h-8" alt="" />{" "}
                Smartphone Warehouse
            </CustomLink>
            <div className="flex flex-col flex-wrap items-center justify-center sm:flex-row sm:space-x-8 sm:flex-nowrap">
                {!loading && (
                    <>
                        <CustomLink to="/">Home</CustomLink>
                        <CustomLink to="/blogs">Blogs</CustomLink>
                        {user && user?.emailVerified ? (
                            <>
                                <CustomLink to="/manage-items">
                                    Manage Items
                                </CustomLink>
                                <CustomLink to="/add-item">
                                    Add Items
                                </CustomLink>
                                <CustomLink to="/my-item">My Items</CustomLink>
                                <CustomLink to="/dashboard">
                                    Dashboard
                                </CustomLink>
                                <button
                                    onClick={() => signOut(auth)}
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
                    </>
                )}
            </div>
        </div>
    );
};

export default Navbar;
