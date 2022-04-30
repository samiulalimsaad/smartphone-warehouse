import React from "react";

const Footer = () => {
    return (
        <div className="gap-4 p-4 space-y-8 sm:space-y-0 sm:p-20 sm:items-center sm:flex sm:container justify-evenly text-slate-300">
            <div className="space-y-8 text-center sm:w-1/2">
                <h2 className="text-2xl">About Us</h2>
                <p className="flex justify-center text-justify sm:px-20">
                    Get great deals every day at The Warehouse. Shop online and
                    browse through our massive range of products, with great
                    deals on Fashion, Homewares, Toys, and so much more. With
                    such a huge range of products available online or in-store,
                    we are sure to have everything you need at the lowest
                    prices. Whether you are looking to pick up plates, pots, or
                    other homeware, rock the latest fashions, or are even just
                    buying toys for the kids or the kids at heart, The Warehouse
                    will have what you need. We are New Zealand's biggest
                    one-stop-shop for great products at low prices. Look no
                    further than The Warehouse: where everyone gets a bargain!
                    You can also use our App.
                </p>
            </div>
            <div className="flex text-center sm:w-1/2">
                <div className="text-center sm:w-1/2">
                    <h2 className="my-4 text-2xl">Information</h2>
                    <div className="space-y-1">
                        <p>About Us</p>
                        <p>Shops</p>
                        <p>Branches</p>
                        <p>Our Services</p>
                        <p>Contact</p>
                    </div>
                </div>
                <div className="text-center sm:w-1/2">
                    <h2 className="my-4 text-2xl">Contract</h2>
                    <div className="space-y-1">
                        <p>40 Park Ave, Brooklyn</p>
                        <p>New York, NY 10000, US</p>
                        <p>+1 800 111 2222</p>
                        <p>contact@example.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
