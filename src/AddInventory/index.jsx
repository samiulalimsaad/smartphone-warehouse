import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "../Firebase.init";
import Loading from "../Loading";
import AddInventoryForm from "./AddInventoryForm";
import NewInventoryDetail from "./NewInventoryDetail";

const AddInventory = () => {
    const [user] = useAuthState(auth);
    const [newInventory, setNewInventory] = useState({});

    if (!user) {
        return (
            <div className="h-screen">
                <Loading />
            </div>
        );
    }

    return (
        <div
            className={`container sm:flex mx-auto sm:p-20 p-4 gap-8 ${
                newInventory._id ? "justify-evenly" : "justify-center"
            }`}
        >
            <div className="sm:w-1/2">
                <AddInventoryForm
                    user={user}
                    setNewInventory={setNewInventory}
                />
            </div>
            <div className="sm:w-1/2">
                {newInventory._id && (
                    <NewInventoryDetail inventory={newInventory} />
                )}
            </div>
        </div>
    );
};

export default AddInventory;
