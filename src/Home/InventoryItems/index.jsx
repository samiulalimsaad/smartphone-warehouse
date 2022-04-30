import axios from "axios";
import React, { useEffect, useState } from "react";

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
            <div className="flex gap-4">
                {items?.map((item) => (
                    <div
                        key={item.name}
                        className="relative w-1/5 rounded-md shadow-md ring-1 ring-slate-300 drop-shadow-md text-slate-800"
                    >
                        <div className="p-4 mb-8">
                            <img
                                src={item.images[0]}
                                alt=""
                                className="object-contain object-center w-auto h-96"
                            />
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
                            <ul className="capitalize text-md text-slate-600">
                                {item.description.map((dest) => (
                                    <li key={dest}>{dest}</li>
                                ))}
                            </ul>
                        </div>
                        <button className="absolute bottom-0 w-full py-2 bg-teal-500 rounded-md">
                            Stock Update
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default InventoryItems;
