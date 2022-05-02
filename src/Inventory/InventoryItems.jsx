import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";

const InventoryItems = ({ inventory }) => {
    const { id } = useParams();

    const deliverItem = (item) => {
        axios.put(
            `https://smartphone-warehouse-saad.herokuapp.com/inventories/${item._id}`,
            {
                quantity: item.quantity - 1,
            }
        );
        console.log(item);
    };

    return (
        <div className="">
            <div className="relative w-full rounded-md shadow-md ring-1 ring-slate-300 drop-shadow-md text-slate-800">
                <div className="flex">
                    <div className="p-8 pb-14">
                        <div className="flex items-center justify-center overflow-hidden">
                            <img
                                src={inventory?.images[0]}
                                alt=""
                                className="object-contain object-center w-auto duration-500 h-96 hover:scale-110"
                            />
                        </div>
                        <div className="my-4">
                            <h3 className="text-2xl text-slate-900">
                                {inventory?.name}
                            </h3>
                            <p className="text-xl capitalize">
                                Price : ${inventory?.price}
                            </p>
                            <p className="text-xl capitalize">
                                Available : {inventory?.quantity}
                            </p>
                            <p className="text-xl capitalize">
                                supplier Name : {inventory?.supplierName}
                            </p>
                        </div>
                        <ul className="capitalize text-md text-slate-600">
                            <span className="text-xl capitalize">
                                Description:
                            </span>
                            {inventory?.description.join(", ")}
                            {/* {inventory?.description.map((desc, i) => (
                                <li key={desc + i}>{desc}</li>
                            ))} */}
                        </ul>
                    </div>
                </div>
                <div className="absolute bottom-0 flex w-full">
                    <button
                        className="w-full px-4 py-2 text-center bg-teal-500 rounded-md hover:bg-teal-600 text-slate-50"
                        onClick={() => deliverItem(data?.inventory)}
                    >
                        Deliver
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InventoryItems;
