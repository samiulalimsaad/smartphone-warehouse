import { TrashIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ConfirmationModal from "../ConfirmationModal";
import Loading from "../Loading";

const columns = ["Name", "brand", "Quantity", "Price", "Supplier Name"];

const InventoriesTable = ({ inventory, setInventory }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [id, setId] = useState("");

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
                    {inventory?.map((item) => (
                        <tr
                            key={item._id}
                            className="border border-t-0 border-teal-500 "
                        >
                            <td className="py-6 border border-teal-500">
                                {item.name}
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
                            <td>
                                <button
                                    className="p-2 text-red-600 bg-red-300 rounded-full hover:bg-red-400 hover:text-slate-50"
                                    onClick={() => deleteItem(item)}
                                >
                                    <TrashIcon className="w-4 h-4" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <ToastContainer />
            <div className="overflow-y-scroll">
                <ConfirmationModal
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    id={id}
                />
            </div>
        </div>
    );
};

export default InventoriesTable;
