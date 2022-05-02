import { TrashIcon } from "@heroicons/react/solid";
import axios from "axios";
import React from "react";
import { useTable } from "react-table";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useSWR from "swr";
import Loading from "../Loading";
import { fetcher } from "../utilities/featcher";

const columns = [
    {
        Header: "Name",
        accessor: "name", // accessor is the "key" in the data
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

const InventoriesTable = () => {
    const { data } = useSWR(
        `https://smartphone-warehouse-saad.herokuapp.com/inventories`,
        fetcher,
        {
            refreshInterval: 1500,
        }
    );
    console.log(data);
    if (!data) {
        return (
            <div className="h-screen">
                <Loading />;
            </div>
        );
    }
    const tableInstance = useTable({ data: data?.inventory, columns });

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        tableInstance;

    const deleteItem = async (item) => {
        try {
            const { data } = await axios.delete(
                `https://smartphone-warehouse-saad.herokuapp.com/inventories/${item.original._id}`
            );
            if (data.success) {
                toast.success(data.message, {
                    theme: "dark",
                });
            }
        } catch (error) {
            toast.error("Operation Failed", {
                theme: "dark",
            });
        }
    };

    return (
        // apply the table props
        <table className="w-full table-auto" {...getTableProps()}>
            <thead className="h-12 bg-teal-500 border border-teal-500 text-slate-50">
                {
                    // Loop over the header rows
                    headerGroups.map((headerGroup) => (
                        // Apply the header row props
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                                // Loop over the headers in each row
                                headerGroup.headers.map((column) => (
                                    // Apply the header cell props
                                    <th {...column.getHeaderProps()}>
                                        {
                                            // Render the header
                                            column.render("Header")
                                        }
                                    </th>
                                ))
                            }
                            <th>Actions</th>
                        </tr>
                    ))
                }
            </thead>
            {/* Apply the table body props */}
            <tbody className="text-center" {...getTableBodyProps()}>
                {
                    // Loop over the table rows
                    rows.map((row) => {
                        // Prepare the row for display
                        prepareRow(row);
                        return (
                            // Apply the row props
                            <tr
                                className="h-16 py-4 border border-t-0 border-teal-500"
                                {...row.getRowProps()}
                            >
                                {
                                    // Loop over the rows cells
                                    row.cells.map((cell) => {
                                        // Apply the cell props
                                        return (
                                            <td {...cell.getCellProps()}>
                                                {
                                                    // Render the cell contents
                                                    cell.render("Cell")
                                                }
                                            </td>
                                        );
                                    })
                                }
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
                    })
                }
            </tbody>
            <ToastContainer />
        </table>
    );
};

export default InventoriesTable;
