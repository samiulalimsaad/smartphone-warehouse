import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../Loading";
import useTitle from "../utilities/useTitle";
import InventoriesTable from "./InventoriesTable";

const ManageInventory = () => {
    useTitle("Manage Items");
    const { id } = useParams();
    const [limit, setLimit] = useState(5);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const [inventory, setInventory] = useState([]);

    useEffect(() => {
        axios
            .get(
                `https://smartphone-warehouse-saad.herokuapp.com/inventories?page=${page}&&limit=${limit}`
            )
            .then(({ data }) => {
                if (data.success) {
                    setInventory(data.inventory);
                    setTotal(data.total);
                }
            })
            .catch((err) => {});
    }, [page, limit]);

    return (
        <section id="inventoryItems" className="container mx-auto sm:p-20">
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
            <div>
                {inventory?.length ? (
                    <InventoriesTable
                        inventory={inventory}
                        setInventory={setInventory}
                    />
                ) : (
                    <div className="h-96">
                        <Loading />
                    </div>
                )}
            </div>
            <div className="flex justify-center mt-20">
                {new Array(total).fill(1).map((v, i) => (
                    <button
                        key={i + 1}
                        className={`px-4 py-3 border border-teal-600 hover:text-teal-50 ${
                            page === i + 1
                                ? "bg-teal-600 hover:bg-teal-700 text-teal-50"
                                : "hover:bg-teal-600"
                        }`}
                        onClick={() => setPage(i + 1)}
                    >
                        {i + 1}
                    </button>
                ))}
                <select
                    className="px-4 py-3 border border-teal-600"
                    name="page"
                    onClick={(e) => {
                        setLimit(+e.target.value);
                        setPage(1);
                    }}
                >
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                    <option value="25">25</option>
                </select>
            </div>
        </section>
    );
};

export default ManageInventory;
