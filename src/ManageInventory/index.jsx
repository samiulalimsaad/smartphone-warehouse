import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
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
            <div className="flex items-center justify-between">
                <h2 className="my-4 text-6xl text-center text-teal-500">
                    Inventory Items List
                </h2>
                <div>
                    <Link
                        to="/add-inventory"
                        className="px-4 py-2 bg-teal-600 rounded-md hover:bg-teal-700 text-slate-50"
                    >
                        Add a new Item
                    </Link>
                </div>
            </div>
            <InventoriesTable inventory={data?.inventory} />
        </section>
    );
};

export default ManageInventory;
