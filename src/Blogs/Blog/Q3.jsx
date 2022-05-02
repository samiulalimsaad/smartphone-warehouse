import React from "react";

const Q3 = () => {
    return (
        <div>
            <h2 className="py-4 text-4xl text-center text-teal-700">
                Differences between sql and nosql databases.
            </h2>
            <table className="w-full border border-collapse border-teal-500 table-fixed ">
                <thead className="text-white bg-teal-500">
                    <tr>
                        <th className="p-4 border border-teal-900 ">SQL</th>
                        <th className="p-4 border border-teal-900 ">NoSql</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="p-4 border border-teal-900">
                            SQL databases are primarily called as Relational
                            Databases (RDBMS)
                        </td>
                        <td className="p-4 border border-teal-900">
                            NoSQL database are primarily called as
                            non-relational or distributed database.
                        </td>
                    </tr>
                    <tr>
                        <td className="p-4 border border-teal-900">
                            SQL databases are vertically scalable
                        </td>
                        <td className="p-4 border border-teal-900">
                            SQL databases are vertically and horizontally
                            scalable
                        </td>
                    </tr>
                    <tr>
                        <td className="p-4 border border-teal-900">
                            SQL databases are table-based
                        </td>
                        <td className="p-4 border border-teal-900">
                            NoSQL databases are either key-value pairs
                        </td>
                    </tr>
                    <tr>
                        <td className="p-4 border border-teal-900">
                            fixed or static or predefined schema
                        </td>
                        <td className="p-4 border border-teal-900">
                            dynamic schema
                        </td>
                    </tr>
                    <tr>
                        <td className="p-4 border border-teal-900">
                            best suited for complex queries
                        </td>
                        <td className="p-4 border border-teal-900">
                            not so good for complex queries
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Q3;
