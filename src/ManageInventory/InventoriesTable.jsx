import { TrashIcon } from "@heroicons/react/solid";
import axios from "axios";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ConfirmationModal from "../ConfirmationModal";
import Loading from "../Loading";

const columns = ["Name", "brand", "Quantity", "Price", "Supplier Name"];

const InventoriesTable = ({ inventory }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [accepted, setAccepted] = useState(false);

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
            if (accepted) {
                const { data } = await axios.delete(
                    `https://smartphone-warehouse-saad.herokuapp.com/inventories/${item.original._id}`
                );
                if (data.success) {
                    toast.success(data.message, {
                        theme: "dark",
                    });
                }
            }
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
            <ConfirmationModal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                setAccepted={setAccepted}
            />
        </div>
    );
};

export default InventoriesTable;
