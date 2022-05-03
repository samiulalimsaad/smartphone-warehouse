import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "../Firebase.init";
import AddInventoryForm from "./AddInventoryForm";
import NewInventoryDetail from "./NewInventoryDetail";

const AddInventory = () => {
    const [user] = useAuthState(auth);
    const [newInventory, setNewInventory] = useState({});
    console.log(newInventory);
    return (
        <div
            className={`container flex mx-auto my-20 ${
                newInventory._id ? "justify-evenly" : "justify-center"
            }`}
        >
            <AddInventoryForm user={user} setNewInventory={setNewInventory} />
            {newInventory._id && (
                <NewInventoryDetail inventory={newInventory} />
            )}
        </div>
    );
};

export default AddInventory;
