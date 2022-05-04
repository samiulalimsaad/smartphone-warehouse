import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Firebase.init";
import Loading from "../Loading";
import useTitle from "../utilities/useTitle";

const Dashboard = () => {
    useTitle("Dashboard");
    const [user] = useAuthState(auth);
    if (!user) {
        return (
            <div className="h-screen">
                <Loading />
            </div>
        );
    }
    return (
        <div className="h-screen p-20">
            <h1 className="text-5xl text-center text-slate-700">Dashboard</h1>
            <div className="mt-8 space-y-8 text-3xl text-center text-slate-700">
                <h2>
                    You are logged in as{" "}
                    <span className="font-semibold">{user?.displayName}</span>
                </h2>
                <h2>
                    You email:{" "}
                    <span className="font-semibold">{user?.email}</span>
                </h2>
            </div>
        </div>
    );
};

export default Dashboard;
