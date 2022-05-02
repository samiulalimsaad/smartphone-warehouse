import { ArrowRightIcon } from "@heroicons/react/solid";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useParams } from "react-router-dom";
import { auth } from "../Firebase.init";
import Loading from "../Loading";
import useTitle from "../utilities/useTitle";
import InventoryForm from "./InventoryForm";
import InventoryItems from "./InventoryItems";

const Inventory = () => {
    useTitle("Inventory Items");
    const { id } = useParams();
    const [inventory, setInventory] = useState({});
    const [user] = useAuthState(auth);

    useEffect(() => {
        axios
            .get(
                `https://smartphone-warehouse-saad.herokuapp.com/inventories/${id}`
            )
            .then(({ data }) => {
                setInventory(data);
                console.log(data);
            });
    }, [id, user]);

    return (
        <section
            id="inventoryItems"
            className="p-4 mx-auto sm:container sm:p-20"
        >
            <h2 className="my-4 text-6xl text-center text-teal-500">
                Inventory Items
            </h2>
            {inventory.inventory ? (
                <div>
                    <div className="flex p-8 justify-evenly">
                        <div className="w-1/2 h-screen p-8 overflow-y-scroll">
                            <InventoryItems inventory={inventory.inventory} />
                        </div>
                        <div className="w-1/2 h-screen p-8">
                            <InventoryForm
                                inventory={inventory.inventory}
                                user={user}
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-center mt-8">
                        <Link
                            to="/manage-inventories"
                            className="bottom-0 flex items-center justify-center px-4 py-2 text-center rounded-md text-teal-50 bg-sky-500 hover:bg-sky-600"
                        >
                            Manage Inventories
                            <ArrowRightIcon className="w-4 h-4 ml-2" />
                        </Link>
                    </div>
                </div>
            ) : (
                <div className="h-screen">
                    <Loading />
                </div>
            )}
        </section>
    );
};

export default Inventory;
