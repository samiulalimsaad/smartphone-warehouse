import React from "react";

const NewInventoryDetail = ({ inventory }) => {
    return (
        <div className="w-full rounded-md shadow-md bg-slate-50 ring-1 ring-slate-300 drop-shadow-md text-slate-800">
            <div className="flex justify-center w-full">
                <div className="p-8 pb-14">
                    <div className="flex items-center justify-center w-full overflow-hidden">
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
                            supplier Name : {inventory?.supplierName}
                        </p>
                        <p className="text-xl capitalize">
                            brand Name : {inventory?.brandName}
                        </p>
                        <p className="text-xl capitalize">
                            Price : ${inventory?.price}
                        </p>
                        <p className="text-xl capitalize">
                            Available : {inventory?.quantity}
                        </p>
                    </div>
                    <ul className="capitalize text-md text-slate-600">
                        <span className="text-xl capitalize">Description:</span>
                        {inventory?.description.join(", ")}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NewInventoryDetail;
