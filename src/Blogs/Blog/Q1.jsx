import React from "react";

const Q1 = () => {
    return (
        <div>
            <h2 className="py-4 text-4xl text-center text-teal-700">
                Difference between javascript and node js
            </h2>
            <table className="w-full border border-collapse border-teal-500 table-fixed ">
                <thead className="text-white bg-teal-500">
                    <tr>
                        <th className="p-4 border border-teal-900 ">
                            Javascript
                        </th>
                        <th className="p-4 border border-teal-900 ">Nodejs</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="p-4 border border-teal-900">
                            Javascript is a programming language that is used on
                            website.
                        </td>
                        <td className="p-4 border border-teal-900">
                            NodeJS is a Javascript runtime environment.
                        </td>
                    </tr>
                    <tr>
                        <td className="p-4 border border-teal-900">
                            Javascript can only run in the browsers.
                        </td>
                        <td className="p-4 border border-teal-900">
                            NodeJS helps to run Javascript outside the browser.
                        </td>
                    </tr>
                    <tr>
                        <td className="p-4 border border-teal-900">
                            Javascript is capable play with the DOM.
                        </td>
                        <td className="p-4 border border-teal-900">
                            Nodejs does not have HTML tags.
                        </td>
                    </tr>
                    <tr>
                        <td className="p-4 border border-teal-900">
                            Javascript is used in frontend development.
                        </td>
                        <td className="p-4 border border-teal-900">
                            Nodejs is used in server-side development.
                        </td>
                    </tr>
                    <tr>
                        <td className="p-4 border border-teal-900">
                            Javascript frameworks are ReactJs, VueJs, NextJS
                            etc.
                        </td>
                        <td className="p-4 border border-teal-900">
                            Nodejs Frameworks are express, Nest etc.
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Q1;
