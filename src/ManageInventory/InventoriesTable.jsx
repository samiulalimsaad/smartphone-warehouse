import { TrashIcon } from "@heroicons/react/solid";
import axios from "axios";
import React from "react";
import { useTable } from "react-table";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../Loading";

const columns = [
    {
        Header: "Name",
        accessor: "name",
    },
    {
        Header: "brand",
        accessor: "brandName",
    },
    {
        Header: "Quantity",
        accessor: "quantity",
    },
    {
        Header: "Price",
        accessor: "price",
    },
    {
        Header: "Supplier Name",
        accessor: "supplierName",
    },
];

const InventoriesTable = ({ inventory }) => {
    if (!inventory) {
        return (
            <div className="h-screen">
                <Loading />;
            </div>
        );
    }

    const tableInstance = useTable({ data: inventory, columns });

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        tableInstance;

    const deleteItem = async (item) => {
        try {
            if (confirm("Do you want to proceed?")) {
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
            <table
                className="text-xs table-auto sm:w-full sm:text-base"
                {...getTableProps()}
            >
                <thead className="h-12 bg-teal-500 border border-teal-500 text-slate-50">
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()}>
                                    {column.render("Header")}
                                </th>
                            ))}
                            <th>Actions</th>
                        </tr>
                    ))}
                </thead>
                <tbody className="text-center" {...getTableBodyProps()}>
                    {rows.map((row) => {
                        prepareRow(row);
                        return (
                            <tr
                                className="h-16 py-4 border border-t-0 border-teal-500"
                                {...row.getRowProps()}
                            >
                                {row.cells.map((cell) => {
                                    return (
                                        <td {...cell.getCellProps()}>
                                            {cell.render("Cell")}
                                        </td>
                                    );
                                })}
                                <td>
                                    <button
                                        className="p-2 text-red-600 bg-red-300 rounded-full hover:bg-red-400 hover:text-slate-50"
                                        onClick={() => deleteItem(row)}
                                    >
                                        <TrashIcon className="w-4 h-4" />
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
                <ToastContainer />
            </table>
        </div>
    );
};

export default InventoriesTable;
