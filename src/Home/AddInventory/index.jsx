import { useAuthState } from "react-firebase-hooks/auth";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "../../Firebase.init";
import AddInventoryForm from "./AddInventoryForm";

const AddInventory = () => {
    const [user] = useAuthState(auth);
    console.log(user);
    return (
        <div>
            <h1>Add Inventory</h1>
            <div>
                <AddInventoryForm user={user} />
            </div>
        </div>
    );
};

export default AddInventory;
