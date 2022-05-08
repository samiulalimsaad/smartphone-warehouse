import React from "react";
import useSWR from "swr";
import Loading from "../Loading";
import { fetcher } from "../utilities/featcher";
import useTitle from "../utilities/useTitle";
import Banner from "./Banner";
import ExtraSection from "./ExtraSection";
import InventoryItems from "./InventoryItems";

const Home = () => {
    useTitle("Home");

    const { data, error } = useSWR(
        "https://smartphone-warehouse-saad.herokuapp.com/inventories?limit=5",
        fetcher
    );

    return (
        <div>
            <Banner />
            {data ? (
                <>
                    <InventoryItems inventory={data?.inventory} />
                    <ExtraSection />
                </>
            ) : (
                <div className="h-96">
                    <Loading />
                </div>
            )}
        </div>
    );
};

export default Home;
