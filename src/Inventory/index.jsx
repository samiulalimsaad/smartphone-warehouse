import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../utilities/featcher";
import useTitle from "../utilities/useTitle";
import InventoryForm from "./InventoryForm";
import InventoryItems from "./InventoryItems";

const Inventory = () => {
    useTitle("Inventory Items");
    const { id } = useParams();
    const { data, loading, error } = useSWR(
        `https://smartphone-warehouse-saad.herokuapp.com/inventories/${id}`,
        fetcher,
        {
            refreshInterval: 1500,
        }
    );
    return (
        <section
            id="inventoryItems"
            className="p-4 mx-auto sm:container sm:p-20"
        >
            <h2 className="my-4 text-6xl text-center text-teal-500">
                Inventory Items
            </h2>
            <div className="flex p-8 justify-evenly">
                <div className="w-1/2 h-screen p-8 overflow-y-scroll">
                    <InventoryItems inventory={data?.inventory} />
                </div>
                <div className="w-1/2 h-screen p-8 overflow-y-scroll">
                    <InventoryForm inventory={data?.inventory} />
                </div>
            </div>
        </section>
    );
};

export default Inventory;
