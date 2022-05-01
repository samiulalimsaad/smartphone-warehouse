import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../utilities/featcher";
import useTitle from "../utilities/useTitle";

const InventoryItems = () => {
    const { id } = useParams();
    useTitle("Inventory Items");
    const { data, loading, error } = useSWR(
        "https://smartphone-warehouse-saad.herokuapp.com/inventories",
        fetcher,
        {
            refreshInterval: 1500,
        }
    );

    const deliverItem = (item) => {
        axios.put(
            `https://smartphone-warehouse-saad.herokuapp.com/inventories/${item._id}`,
            {
                quantity: item.quantity - 1,
            }
        );
        console.log(item);
    };

    const deleteItem = (item) => {
        console.log(item);
    };

    return (
        <div className="grid grid-cols-1 gap-4">
            {data?.inventory?.map((item) => (
                <div
                    key={item._id}
                    className="relative w-full rounded-md shadow-md ring-1 ring-slate-300 drop-shadow-md text-slate-800"
                >
                    <div className="flex">
                        <div className="flex items-center justify-center overflow-hidden">
                            <img
                                src={item.images[0]}
                                alt=""
                                className="object-contain object-center w-auto duration-500 h-96 hover:scale-110"
                            />
                        </div>
                        <div className="gap-8 p-8 flexs pb-14">
                            <div>
                                <h3 className="text-2xl text-slate-900">
                                    {item.name}
                                </h3>
                                <p className="text-xl capitalize">
                                    Price : ${item.price}
                                </p>
                                <p className="text-xl capitalize">
                                    Available : {item.quantity}
                                </p>
                                <p className="text-xl capitalize">
                                    supplier Name : {item.supplierName}
                                </p>
                            </div>
                            <ul className="capitalize text-md text-slate-600">
                                {/* {item.description.join(", ")} */}
                                <span className="text-xl capitalize">
                                    Description:
                                </span>
                                {item.description.map((desc, i) => (
                                    <li key={desc + i}>{desc}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="absolute bottom-0 flex w-full">
                        <button
                            to={`/inventory/${item.id}`}
                            className="w-full px-4 py-2 text-center bg-teal-500 rounded-md hover:bg-teal-600 text-slate-50"
                            onClick={() => deliverItem(item)}
                        >
                            Deliver
                        </button>
                        <button
                            to={`/inventory/${item.id}`}
                            className="w-full px-4 py-2 text-center bg-red-500 rounded-md hover:bg-red-600 text-slate-50"
                            onClick={() => deleteItem(item)}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default InventoryItems;
