import { PencilIcon } from "@heroicons/react/outline";
import { TrashIcon } from "@heroicons/react/solid";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ModalContext } from "../App";
import Loading from "../Loading";

const columns = [
    "No",
    "Name",
    "image",
    "brand",
    "Quantity",
    "Price",
    "Supplier Name",
];

const InventoriesTable = ({ inventory, setInventory }) => {
    const navigate = useNavigate();

    const { setIsOpen, setId } = useContext(ModalContext);

    if (!inventory) {
        return (
            <div className="h-screen">
                <Loading />;
            </div>
        );
    }

    const deleteItem = async (item) => {
        try {
            setIsOpen(true);
            setId(item._id);
            const items = inventory.filter((v) => v._id !== item._id);
            setInventory(items);
        } catch (error) {
            toast.error("Operation Failed : " + error.message, {
                theme: "dark",
            });
        }
    };

    return (
        <div>
            <table className="text-xs table-auto sm:w-full sm:text-base">
                <thead className="h-12 bg-teal-500 border border-teal-500 text-slate-50">
                    <tr>
                        {columns.map((column) => (
                            <th key={column}>{column}</th>
                        ))}
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {inventory?.map((item, i) => (
                        <tr
                            key={item._id}
                            className="border border-t-0 border-teal-500 "
                        >
                            <td className="py-6 border border-teal-500">
                                {i + 1}
                            </td>
                            <td className="py-6 border border-teal-500">
                                {item.name}
                            </td>
                            <td className="flex items-center justify-center py-6">
                                <img
                                    src={item.images[0]}
                                    alt=""
                                    className="object-cover w-10"
                                />
                            </td>
                            <td className="py-6 border border-teal-500">
                                {item.brandName}
                            </td>
                            <td className="py-6 border border-teal-500">
                                {item.quantity}
                            </td>
                            <td className="py-6 border border-teal-500">
                                {item.price}
                            </td>
                            <td className="py-6 border border-teal-500">
                                {item.supplierName}
                            </td>
                            <td className="space-y-2 space-x02 sm:space-x-2 sm:space-y-0">
                                <button
                                    className="p-2 rounded-full text-sky-900 bg-sky-300 hover:bg-sky-400 hover:text-slate-50"
                                    title="Edit"
                                    onClick={() =>
                                        navigate(`/inventory/${item._id}`)
                                    }
                                >
                                    <PencilIcon className="w-4 h-4" />
                                </button>
                                <button
                                    className="p-2 text-red-600 bg-red-300 rounded-full hover:bg-red-400 hover:text-slate-50"
                                    onClick={() => deleteItem(item)}
                                    title="Delete"
                                >
                                    <TrashIcon className="w-4 h-4" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default InventoriesTable;
