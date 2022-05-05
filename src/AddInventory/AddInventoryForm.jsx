import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { toast } from "react-toastify";

const AddInventoryForm = ({ user, setNewInventory }) => {
    const addInventory = async (values) => {
        values.images = values.image.split(",");
        values.description = values.description.split(",");
        values.supplierName = user?.displayName;
        values.email = user?.email;
        try {
            const { data } = await axios.post(
                `https://smartphone-warehouse-saad.herokuapp.com/inventories`,
                values
            );
            if (data.success) {
                setNewInventory(data.inventory);
                toast.success("Inventory Added", {
                    theme: "dark",
                });
            }
        } catch (error) {
            toast.error("Operation Failed Failed:" + error.message, {
                theme: "dark",
            });
        }
    };

    const initialValues = {
        name: "",
        image: "",
        quantity: "",
        price: "",
        supplierName: user?.displayName,
        email: user?.email,
        brandName: "",
        description: "",
    };

    return (
        <div className="p-8 bg-teal-100">
            <h1 className="text-2xl text-center">Add a New Inventory Item</h1>
            <Formik
                initialValues={initialValues}
                onSubmit={addInventory}
                className="duration-1000 ease-in-out"
            >
                {({ isSubmitting, isValid, values }) => (
                    <Form className="mt-8 space-y-6">
                        <Field
                            type="hidden"
                            name="remember"
                            defaultValue="true"
                        />
                        <div className="space-y-4 rounded-md">
                            <div className="justify-between gap-4 space-y-4 sm:flex sm:space-y-0">
                                <div className="w-full">
                                    <label
                                        htmlFor="name"
                                        className="pb-2 ml-2 text-teal-900"
                                    >
                                        Supplier Name
                                    </label>
                                    <Field
                                        id="supplierName"
                                        name="supplierName"
                                        autoComplete="supplierName"
                                        required
                                        className="relative block w-full p-3 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg appearance-none cursor-not-allowed bg-slate-50 focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                                        placeholder={user?.displayName}
                                        readOnly
                                        disabled
                                    />
                                    <ErrorMessage name="supplierName">
                                        {(msg) => (
                                            <div className="text-red-500">
                                                {msg}
                                            </div>
                                        )}
                                    </ErrorMessage>
                                </div>
                                <div className="w-full">
                                    <label
                                        htmlFor="name"
                                        className="pb-2 ml-2 text-teal-900"
                                    >
                                        Supplier Email
                                    </label>
                                    <Field
                                        id="email"
                                        name="email"
                                        autoComplete="email"
                                        required
                                        className="relative block w-full p-3 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg appearance-none cursor-not-allowed bg-slate-50 focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                                        placeholder={user?.email}
                                        readOnly
                                        disabled
                                    />
                                    <ErrorMessage name="email">
                                        {(msg) => (
                                            <div className="text-red-500">
                                                {msg}
                                            </div>
                                        )}
                                    </ErrorMessage>
                                </div>
                            </div>
                            <div className="justify-between gap-4 space-y-4 sm:flex sm:space-y-0">
                                <div className="w-full">
                                    <label
                                        htmlFor="name"
                                        className="pb-2 ml-2 text-teal-900"
                                    >
                                        Inventory Name
                                    </label>
                                    <Field
                                        id="name"
                                        name="name"
                                        type="name"
                                        autoComplete="name"
                                        required
                                        className="relative block w-full p-3 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                                        placeholder="Inventory Name"
                                    />
                                    <ErrorMessage name="name">
                                        {(msg) => (
                                            <div className="text-red-500">
                                                {msg}
                                            </div>
                                        )}
                                    </ErrorMessage>
                                </div>
                                <div className="w-full">
                                    <label
                                        htmlFor="image"
                                        className="pb-2 ml-2 text-teal-900"
                                    >
                                        Image Link
                                    </label>
                                    <Field
                                        id="image"
                                        name="image"
                                        autoComplete="image"
                                        required
                                        className="relative block w-full p-3 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                                        placeholder="Inventory Image Link"
                                    />
                                    <ErrorMessage name="image">
                                        {(msg) => (
                                            <div className="text-red-500">
                                                {msg}
                                            </div>
                                        )}
                                    </ErrorMessage>
                                </div>
                            </div>
                            <div className="justify-between gap-4 space-y-4 sm:flex sm:space-y-0">
                                <div className="w-full">
                                    <label
                                        htmlFor="brandName"
                                        className="pb-2 ml-2 text-teal-900"
                                    >
                                        Brand Name
                                    </label>
                                    <Field
                                        id="brandName"
                                        name="brandName"
                                        autoComplete="brandName"
                                        required
                                        className="relative block w-full p-3 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg appearance-none rounded-b-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                                        placeholder="brandName"
                                    />
                                </div>
                                <div className="w-full">
                                    <label
                                        htmlFor="price"
                                        className="pb-2 ml-2 text-teal-900"
                                    >
                                        Price
                                    </label>
                                    <Field
                                        id="price"
                                        name="price"
                                        type="number"
                                        autoComplete="price"
                                        required
                                        className="relative block w-full p-3 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg appearance-none rounded-b-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                                        placeholder="price"
                                    />
                                    <ErrorMessage name="price">
                                        {(msg) => (
                                            <div className="text-red-500">
                                                {msg}
                                            </div>
                                        )}
                                    </ErrorMessage>
                                </div>
                                <div className="w-full">
                                    <div>
                                        <label
                                            htmlFor="quantity"
                                            className="pb-2 ml-2 text-teal-900"
                                        >
                                            Quantity
                                        </label>
                                        <Field
                                            id="quantity"
                                            name="quantity"
                                            type="number"
                                            autoComplete="quantity"
                                            required
                                            className="relative block w-full p-3 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg appearance-none rounded-b-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                                            placeholder="quantity"
                                        />
                                    </div>
                                    <ErrorMessage name="quantity">
                                        {(msg) => (
                                            <div className="text-red-500">
                                                {msg}
                                            </div>
                                        )}
                                    </ErrorMessage>
                                </div>
                            </div>
                            <div className="w-full">
                                <div>
                                    <label
                                        htmlFor="description"
                                        className="pb-2 ml-2 text-teal-900"
                                    >
                                        Description
                                    </label>
                                    <Field
                                        id="description"
                                        name="description"
                                        autoComplete="description"
                                        as="textarea"
                                        required
                                        className="relative block w-full p-3 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg appearance-none rounded-b-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                                        placeholder="Description separate by comma (,)"
                                    />
                                </div>
                                <ErrorMessage name="description">
                                    {(msg) => (
                                        <div className="text-red-500">
                                            {msg}
                                        </div>
                                    )}
                                </ErrorMessage>
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-teal-600 border border-transparent rounded-md group hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 disabled:opacity-70"
                                disabled={isSubmitting || !isValid}
                            >
                                Add Inventory
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default AddInventoryForm;
