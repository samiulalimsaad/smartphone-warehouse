import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "./404";
import AddInventory from "./AddInventory";
import Blogs from "./Blogs";
import Dashboard from "./Dashboard";
import Footer from "./Footer";
import Home from "./Home";
import Inventory from "./Inventory";
import Login from "./Login";
import ManageInventory from "./ManageInventory";
import MyInventory from "./Myinvebtory";
import Navbar from "./Navbar";
import SignUp from "./SignUp";
import PrivateRoute from "./utilities/PrivateRoute";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <header className="sticky top-0 z-50 bg-slate-900">
                <Navbar />
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/blogs" element={<Blogs />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route
                        path="/dashboard"
                        element={
                            <PrivateRoute>
                                <Dashboard />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/inventory/:id"
                        element={
                            <PrivateRoute>
                                <Inventory />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/manage-inventories"
                        element={
                            <PrivateRoute>
                                <ManageInventory />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/add-inventory"
                        element={
                            <PrivateRoute>
                                <AddInventory />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/my-inventory"
                        element={
                            <PrivateRoute>
                                <MyInventory />
                            </PrivateRoute>
                        }
                    />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
            <footer className="bg-slate-900">
                <Footer />
            </footer>
        </>
    );
}

export default App;
