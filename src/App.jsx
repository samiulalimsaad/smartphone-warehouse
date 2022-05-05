import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import NotFound from "./404";
import AddInventory from "./AddInventory";
import Blogs from "./Blogs";
import ConfirmationModal from "./ConfirmationModal";
import Dashboard from "./Dashboard";
import Footer from "./Footer";
import Home from "./Home";
import Inventory from "./Inventory";
import Login from "./Login";
import ManageInventory from "./ManageInventory";
import MyInventory from "./Myinventory";
import Navbar from "./Navbar";
import SignUp from "./SignUp";
import PrivateRoute from "./utilities/PrivateRoute";

export const ModalContext = createContext();

function App() {
    const [count, setCount] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [id, setId] = useState("");

    return (
        <ModalContext.Provider value={{ setIsOpen, setId }}>
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
            <>
                <ToastContainer />
                {isOpen && (
                    <div className="absolute inset-0">
                        <ConfirmationModal
                            isOpen={isOpen}
                            setIsOpen={setIsOpen}
                            id={id}
                        />
                    </div>
                )}
            </>
        </ModalContext.Provider>
    );
}

export default App;
