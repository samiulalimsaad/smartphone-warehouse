import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../utilities/featcher";
import useTitle from "../utilities/useTitle";
import InventoriesTable from "./InventoriesTable";

const ManageInventory = () => {
    useTitle("Manage Items");
    const { id } = useParams();
    const [items, setItems] = useState([]);

    const { data } = useSWR(
        `https://smartphone-warehouse-saad.herokuapp.com/inventories`,
        fetcher,
        {
            refreshInterval: 1500,
        }
    );

    useEffect(() => {
        axios.get("/data.json").then(({ data }) => {
            setItems(data.redmi);
            console.log(data);
        });
    }, []);

    return (
        <section id="inventoryItems" className="container p-20 mx-auto">
            <h2 className="my-4 text-6xl text-center text-teal-500">
                Inventory Items List
            </h2>
            <InventoriesTable inventory={data?.inventory} />
        </section>
    );
};

export default ManageInventory;
