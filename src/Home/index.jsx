import React from "react";
import useTitle from "../utilities/useTitle";
import Banner from "./Banner";

const Home = () => {
    useTitle("Home");
    return (
        <div>
            <Banner />
        </div>
    );
};

export default Home;
