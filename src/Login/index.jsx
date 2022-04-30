import React, { useEffect, useState } from "react";
import {
    useAuthState,
    useSignInWithEmailAndPassword,
    useSignInWithGoogle,
    useUpdatePassword,
} from "react-firebase-hooks/auth";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "../Firebase.init";

const Login = () => {
    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] =
        useSignInWithGoogle(auth);
    const [user1] = useAuthState(auth);
    const [updatePassword, updating, errorPass] = useUpdatePassword(auth);

    const [email, setEmail] = useState("");

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user1 || user || userGoogle) {
            navigate(from, { replace: true });
        }
    }, [user, user1, userGoogle]);

    const signIn = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        if (email && password) {
            signInWithEmailAndPassword(email, password);
        }
    };

    return (
        <div className="flex items-center justify-center p-4 sm:container sm:p-20">
            <div className="sm:w-1/3">
                <form
                    className="p-4 px-8 pt-6 pb-8 mb-4 bg-white border rounded-md shadow-md border-slate-500"
                    onSubmit={signIn}
                >
                    {(error || errorGoogle || errorPass) && (
                        <p className="p-4 mb-4 bg-red-200 rounded-md">
                            {error?.message ||
                                errorGoogle?.message ||
                                errorPass?.message}
                        </p>
                    )}
                    <div className="mb-4">
                        <label
                            className="block mb-2 text-sm font-bold text-slate-700"
                            htmlFor="username"
                        >
                            Email
                        </label>
                        <input
                            className="w-full px-3 py-2 leading-tight border rounded shadow appearance-none text-slate-700 focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="email"
                            required
                            onBlur={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            className="block mb-2 text-sm font-bold text-slate-700"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <input
                            className="w-full px-3 py-2 mb-3 leading-tight border rounded shadow appearance-none border-slate-500 text-slate-700 focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="******************"
                            required
                        />
                    </div>
                    <div className="space-y-4">
                        <button
                            className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Sign In
                        </button>
                        <button
                            className="flex items-center justify-center w-full gap-4 px-4 py-2 font-bold bg-teal-300 rounded hover:text-white text-slate-700 hover:bg-teal-700 focus:outline-none focus:shadow-outline"
                            onClick={() => signInWithGoogle()}
                        >
                            <img
                                src="/images/google.png"
                                alt=""
                                className="h-6"
                            />
                            Sign in With Google
                        </button>
                    </div>
                    <div className="flex items-center justify-center mt-4">
                        <p>Don't have an account?</p>
                        <NavLink to="/signup" className="ml-1 text-sky-600">
                            Create New
                        </NavLink>
                    </div>
                    <div className="flex items-center justify-center mt-4 text-sky-600">
                        <button
                            type="button"
                            onClick={async () => {
                                await updatePassword(email);
                                toast.success("Updated password!", {
                                    theme: "dark",
                                });
                            }}
                        >
                            Forgot Password?
                        </button>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;
