import React, { useEffect, useState } from "react";
import {
    useAuthState,
    useCreateUserWithEmailAndPassword,
    useUpdateProfile,
} from "react-firebase-hooks/auth";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../Firebase.init";
import useTitle from "../utilities/useTitle";

const Signup = () => {
    useTitle("SignUp");
    const [createUserWithEmailAndPassword, user1, loading, error] =
        useCreateUserWithEmailAndPassword(auth, {
            sendEmailVerification: true,
        });
    const [updateProfile, updating] = useUpdateProfile(auth);

    const [user] = useAuthState(auth);

    const [message, setMessage] = useState("");

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/login";

    useEffect(() => {
        if (user?.emailVerified) {
            navigate(from, { replace: true });
        }
    }, [user]);

    const createUser = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        if (name && email && password) {
            createUserWithEmailAndPassword(email, password).then(() => {
                setMessage(
                    `check your mail ${email}. please don't forget to check spam. then back here and refresh the page`
                );
                updateProfile({ displayName: name });
                event.target.reset();
            });
        }
    };
    return (
        <div className="flex items-center justify-center p-4 sm:container sm:p-20">
            <form className="sm:w-1/3" onSubmit={createUser}>
                <div className="p-4 px-8 pt-6 pb-8 mb-4 bg-white border rounded-md shadow-md border-slate-500">
                    {(error || message) && (
                        <p className="p-4 mb-4 bg-red-200 rounded-md">
                            {error?.message || message}
                        </p>
                    )}
                    <div className="mb-4">
                        <label
                            className="block mb-2 text-sm font-bold text-slate-700"
                            htmlFor="name"
                        >
                            Name
                        </label>
                        <input
                            className="w-full px-3 py-2 leading-tight border rounded shadow appearance-none text-slate-700 focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            name="name"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block mb-2 text-sm font-bold text-slate-700"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <input
                            className="w-full px-3 py-2 leading-tight border rounded shadow appearance-none text-slate-700 focus:outline-none focus:shadow-outline"
                            id="email"
                            name="email"
                            type="email"
                            required
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
                            name="password"
                            required
                        />
                    </div>
                    <div className="space-y-4">
                        <button
                            className="w-full px-4 py-2 font-bold bg-teal-300 rounded hover:text-white text-slate-700 hover:bg-teal-700 focus:outline-none focus:shadow-outline"
                            // onClick={createUser}
                        >
                            Sign up
                        </button>
                    </div>
                    <div className="flex items-center justify-center mt-4">
                        <p>Already have an account? please</p>
                        <NavLink to="/login" className="ml-1 text-sky-600">
                            login
                        </NavLink>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Signup;
