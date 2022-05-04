import { Dialog } from "@headlessui/react";

const ConfirmationModal = ({ isOpen, setIsOpen, setAccepted }) => {
    return (
        <Dialog
            open={isOpen}
            onClose={() => setIsOpen(false)}
            className={`absolute h-screen w-full inset-0 backdrop-blur-sm text-slate-900 flex justify-center items-center `}
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
                            setAccepted(false);
                        }}
                    >
                        Cancel
                    </button>
                    <button
                        className="px-6 py-3 bg-teal-500"
                        onClick={() => {
                            setIsOpen(false);
                            setAccepted(true);
                        }}
                    >
                        Yes
                    </button>
                </div>
            </Dialog.Panel>
        </Dialog>
    );
};

export default ConfirmationModal;
