import { Link, useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../utilities/featcher";
import useTitle from "../utilities/useTitle";
import InventoriesTable from "./InventoriesTable";

const ManageInventory = () => {
    useTitle("Manage Items");
    const { id } = useParams();

    const { data } = useSWR(
        `https://smartphone-warehouse-saad.herokuapp.com/inventories`,
        fetcher,
        {
            refreshInterval: 1500,
        }
    );

    return (
        <section id="inventoryItems" className="container p-4 mx-auto sm:p-20">
            <div className="items-center justify-between my-4 sm:flex sm:my-0">
                <h2 className="my-4 text-6xl text-center text-teal-500">
                    Inventory Items List
                </h2>
                <div className="text-center">
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
