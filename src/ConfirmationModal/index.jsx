import { Dialog } from "@headlessui/react";
import axios from "axios";
import { toast } from "react-toastify";

const ConfirmationModal = ({ isOpen, setIsOpen, id }) => {
    const deleteItem = async (item) => {
        try {
            setIsOpen(true);
            const { data } = await axios.delete(
                `https://smartphone-warehouse-saad.herokuapp.com/inventories/${id}`
            );
            if (data.success) {
                toast.success(data.message, {
                    theme: "dark",
                });
                setIsOpen(false);
            }
        } catch (error) {
            toast.error("Operation Failed : " + error.message, {
                theme: "dark",
            });
        }
    };

    return (
        <Dialog
            open={isOpen}
            onClose={() => setIsOpen(false)}
            className={`absolute h-full w-full inset-0 backdrop-blur-sm text-slate-900 flex justify-center items-center z-[55]`}
        >
            <Dialog.Panel className="p-4 bg-white rounded-md shadow-md">
                <Dialog.Title className="text-3xl font-semibold text-slate-700">
                    Do you want to proceed?
                </Dialog.Title>

                <div className="flex justify-center gap-6 mt-8 text-slate-50">
                    <button
                        className="px-6 py-3 bg-red-500"
                        onClick={() => {
                            setIsOpen(false);
                        }}
                    >
                        Cancel
                    </button>
                    <button
                        className="px-6 py-3 bg-teal-500"
                        onClick={deleteItem}
                    >
                        Yes
                    </button>
                </div>
            </Dialog.Panel>
        </Dialog>
    );
};

export default ConfirmationModal;
