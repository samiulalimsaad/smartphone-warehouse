import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import ConfirmationModal from "../ConfirmationModal";
import { auth } from "../Firebase.init";
import Loading from "../Loading";
import useTitle from "../utilities/useTitle";

const MyInventory = () => {
    useTitle("My Inventories");
    const [isOpen, setIsOpen] = useState(false);
    const [accepted, setAccepted] = useState(false);
    const [myItems, setMyItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            axios
                .get(
                    `https://smartphone-warehouse-saad.herokuapp.com/my-inventories?email=${user?.email}`,
                    {
                        headers: {
                            authorization: `Bearer ${localStorage.getItem(
                                "accessToken"
                            )}`,
                        },
                    }
                )
                .then(({ data }) => {
                    if (data.success) {
                        setMyItems(data.inventory);
                    } else {
                        navigate("/login");
                    }
                })
                .catch((err) => {
                    err;
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    }, [user]);

    const deleteItem = async (id) => {
        try {
            setIsOpen(true);
            if (accepted) {
                const { data } = await axios.delete(
                    `https://smartphone-warehouse-saad.herokuapp.com/inventories/${id}`
                );
                if (data.success) {
                    toast.success(data.message, {
                        theme: "dark",
                    });

                    const items = myItems.filter((v) => v._id !== id);
                    setMyItems(items);
                }
            }
        } catch (error) {
            toast.error("Operation Failed : " + error.message, {
                theme: "dark",
            });
        }
    };

    if (loading) {
        return (
            <div className="h-screen">
                <Loading />
            </div>
        );
    }

    if (myItems.length === 0) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div>
                    <h1 className="text-3xl text-center">No Data Found.</h1>
                    <h3 className="text-xl text-center">
                        Please inset few inventory.
                    </h3>
                </div>
            </div>
        );
    }

    return (
        <div className="container p-4 mx-auto sm:p-20">
            <h1 className="my-8 text-4xl text-center text-teal-600 sm:text-6xl">
                My Inventories
            </h1>
            <div className="grid gap-4 sm:grid-cols-4">
                {myItems?.map((item) => (
                    <div key={item._id} className="">
                        <div className="relative w-full h-full rounded-md shadow-md bg-slate-50 ring-1 ring-slate-300 drop-shadow-md text-slate-800">
                            <div className="flex">
                                <div className="p-8 pb-14">
                                    <div className="flex items-center justify-center overflow-hidden">
                                        <img
                                            src={item?.images[0]}
                                            alt=""
                                            className="object-contain object-center w-auto duration-500 h-96 hover:scale-110"
                                        />
                                    </div>
                                    <div className="my-4">
                                        <h3 className="text-2xl text-slate-900">
                                            {item?.name}
                                        </h3>
                                        <p className="text-xl capitalize">
                                            Price : ${item?.price}
                                        </p>
                                        <p className="text-xl capitalize">
                                            Available : {item?.quantity}
                                        </p>
                                        <p className="text-xl capitalize">
                                            supplier Name : {item?.supplierName}
                                        </p>
                                    </div>
                                    <ul className="capitalize text-md text-slate-600">
                                        <span className="text-xl capitalize">
                                            Description:
                                        </span>
                                        {item?.description.join(", ")}
                                        {/* {inventory?.description.map((desc, i) => (
                                <li key={desc + i}>{desc}</li>
                            ))} */}
                                    </ul>
                                </div>
                            </div>
                            <div className="absolute bottom-0 flex w-full">
                                <button
                                    className="w-full px-4 py-2 text-center bg-red-500 rounded-md hover:bg-red-600 text-slate-50"
                                    onClick={() => deleteItem(item._id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <ToastContainer />
            <ConfirmationModal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                setAccepted={setAccepted}
            />
        </div>
    );
};

export default MyInventory;