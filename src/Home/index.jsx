import React from "react";
import useTitle from "../utilities/useTitle";
import Banner from "./Banner";
import InventoryItems from "./InventoryItems";

const Home = () => {
    useTitle("Home");
    return (
        <div>
            <Banner />
            <InventoryItems />
        </div>
    );
};

export default Home;
