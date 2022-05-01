import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const InventoryItems = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        axios.get("data.json").then(({ data }) => {
            setItems(data.redmi);
            console.log(data);
        });
    }, []);
    return (
        <section id="inventoryItems" className="container p-4 mx-auto">
            <h2 className="my-4 text-6xl text-center text-teal-500">
                Inventory Items
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-5 ">
                {items?.map((item) => (
                    <div
                        key={item.name}
                        className="relative w-full rounded-md shadow-md ring-1 ring-slate-300 drop-shadow-md text-slate-800"
                    >
                        <div className="overflow-hidden">
                            <img
                                src={item.images[0]}
                                alt=""
                                className="object-contain object-center w-auto duration-500 h-96 hover:scale-110"
                            />
                        </div>
                        <div className="p-8 pb-14">
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
                            <hr className="my-2" />
                            <ul className="capitalize text-md text-slate-600">
                                {item.description.map((dest) => (
                                    <li key={dest}>{dest}</li>
                                ))}
                            </ul>
                        </div>
                        <NavLink
                            to={`/inventory/${item.id}`}
                            className="absolute bottom-0 w-full py-2 text-center bg-teal-500 rounded-md hover:bg-teal-600"
                        >
                            Stock Update
                        </NavLink>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default InventoryItems;
