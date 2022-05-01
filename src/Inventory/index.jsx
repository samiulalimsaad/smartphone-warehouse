import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import useTitle from "../utilities/useTitle";

const Inventory = () => {
    const { id } = useParams();
    const [items, setItems] = useState([]);
    useTitle("Inventory Items");

    useEffect(() => {
        axios.get("/data.json").then(({ data }) => {
            setItems(data.redmi);
            console.log(data);
        });
    }, []);

    return (
        <section id="inventoryItems" className="container p-20 mx-auto">
            <h2 className="my-4 text-6xl text-center text-teal-500">
                Inventory Items
            </h2>
            <div className="grid grid-cols-2 gap-4">
                {items?.map((item) => (
                    <div
                        key={item.name}
                        className="relative w-full rounded-md shadow-md ring-1 ring-slate-300 drop-shadow-md text-slate-800"
                    >
                        <div className="flex">
                            <div className="flex items-center justify-center">
                                <img
                                    src={item.images[0]}
                                    alt=""
                                    className="object-contain object-center w-auto h-96"
                                />
                            </div>
                            <div className="flex gap-8 p-8 pb-14">
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
                                    {item.description.map((dest) => (
                                        <li key={dest}>{dest}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="absolute bottom-0 flex w-full">
                            <NavLink
                                to={`/inventory/${item.id}`}
                                className="w-full px-4 py-2 text-center bg-teal-500 rounded-md hover:bg-teal-600 text-slate-50"
                            >
                                Stock Update
                            </NavLink>
                            <NavLink
                                to={`/inventory/${item.id}`}
                                className="w-full px-4 py-2 text-center bg-red-500 rounded-md hover:bg-red-600 text-slate-50"
                            >
                                Delete
                            </NavLink>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Inventory;
