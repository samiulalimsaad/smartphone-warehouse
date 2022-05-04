import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useParams } from "react-router-dom";
import useSWR from "swr";
import { auth } from "../Firebase.init";
import Loading from "../Loading";
import { fetcher } from "../utilities/featcher";
import useTitle from "../utilities/useTitle";
import InventoryForm from "./InventoryForm";
import InventoryItems from "./InventoryItems";

const Inventory = () => {
    useTitle("Inventory Item");
    const { id } = useParams();
    const [user] = useAuthState(auth);

    const { data, error } = useSWR(
        `https://smartphone-warehouse-saad.herokuapp.com/inventories/${id}`,
        fetcher,
        {
            refreshInterval: 1500,
        }
    );
    return (
        <section
            id="inventoryItems"
            className="p-4 mx-auto sm:container sm:p-20"
        >
            <h2 className="my-4 text-6xl text-center text-teal-500">
                Inventory Items
            </h2>
            {user ? (
                <div>
                    <div className="flex p-8 justify-evenly">
                        <div className="w-1/2 h-screen p-8 overflow-y-scroll">
                            <InventoryItems inventory={data?.inventory} />
                        </div>
                        <div className="w-1/2 h-screen p-8">
                            <InventoryForm
                                inventory={data?.inventory}
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
